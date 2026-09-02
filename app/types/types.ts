// ============================================================================
// FormData -> typed blog-post values, with validation.
// Purpose: Shared helpers for the blog create + edit actions and PostForm:
//            - PostFormState: shape returned to useActionState
//            - PostFormValues: the typed row PostForm collects
//            - parseAndValidatePostForm(): reads FormData, validates required
//              fields, returns typed values or errors — mirrors
//              parseCaseStudyForm in admin/case-study/_lib.
//            - slugify(): title -> URL slug, shared by both post and
//              case-study creation.
//            - computeTimeAgo(): publish date -> the stored "time ago" label.
// Type: Plain module (importable from actions and the form)
// ============================================================================

import { isRenderableImageSrc } from "@/app/api/lib/blog-actions/blog-image";
import { isEmptyRichText } from "@/app/api/lib/rich-text";

export type PostFormValues = {
    title: string;
    excerpt: string;
    content: string;
    image: string;
    thumbnailImage: string | null;
    accent: string;
    date: string;
    categoryId: number | null;
    authorId: string | null;
    isFeatured: boolean;
    isSidebar: boolean;
};

export type PostFormState = {
    error?: string;
    fieldErrors?: Partial<Record<keyof PostFormValues, string>>;
    /**
     * What was submitted, echoed back so a rejected save can be re-rendered
     * with the author's own text still in place. React resets an uncontrolled
     * form once its action resolves, so without this one missing field would
     * blank out everything else that had been typed.
     */
    values?: PostFormValues;
};

const REQUIRED: [key: string, label: string][] = [
    ["title", "Title"],
    ["excerpt", "Excerpt"],
    ["content", "Content"],
    ["image", "Cover image"],
    ["date", "Publish date"],
];

// Always returns `values` — even when invalid — so the caller can hand the
// submitted text back to the form. Callers must check `fieldErrors` before
// writing anything to the database.
export function parseAndValidatePostForm(formData: FormData): {
    values: PostFormValues;
    fieldErrors?: Partial<Record<keyof PostFormValues, string>>;
} {
    const get = (k: string) => String(formData.get(k) ?? "").trim();
    const opt = (k: string) => {
        const v = get(k);
        return v ? v : null;
    };
    // Blank unless the editor actually holds something visible — Tiptap
    // serialises an untouched document as "<p></p>", which is truthy.
    const richText = (k: string) => {
        const v = get(k);
        return v && !isEmptyRichText(v) ? v : "";
    };

    const fieldErrors: Partial<Record<keyof PostFormValues, string>> = {};
    for (const [key, label] of REQUIRED) {
        const value = key === "content" ? richText(key) : get(key);
        if (!value) fieldErrors[key as keyof PostFormValues] = `${label} is required.`;
    }

    // next/image throws on a src it can't parse — reject it here rather than
    // on the public page.
    const image = get("image");
    if (image && !isRenderableImageSrc(image)) {
        fieldErrors.image = "Cover image must be a path starting with / or a full http(s) URL.";
    }
    const thumbnailImage = get("thumbnailImage");
    if (thumbnailImage && !isRenderableImageSrc(thumbnailImage)) {
        fieldErrors.thumbnailImage =
            "Card thumbnail must be a path starting with / or a full http(s) URL.";
    }

    const categoryIdRaw = get("categoryId");

    return {
        fieldErrors: Object.keys(fieldErrors).length > 0 ? fieldErrors : undefined,
        values: {
            title: get("title"),
            excerpt: get("excerpt"),
            content: richText("content"),
            image,
            thumbnailImage: opt("thumbnailImage"),
            accent: get("accent"),
            date: get("date"),
            categoryId: categoryIdRaw ? Number(categoryIdRaw) : null,
            authorId: opt("authorId"),
            isFeatured: formData.get("isFeatured") === "on",
            isSidebar: formData.get("isSidebar") === "on",
        },
    };
}

/** Title -> URL slug: lowercase, alphanumeric words joined by single hyphens. */
export function slugify(text: string): string {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Publish date -> a relative label ("3 days ago", "in 2 weeks"), computed
 * once at save time and stored rather than derived live on every render.
 */
export function computeTimeAgo(dateStr: string): string {
    const date = new Date(`${dateStr}T00:00:00`);
    if (Number.isNaN(date.getTime())) return "";

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const diffDays = Math.round((today.getTime() - date.getTime()) / DAY_MS);
    if (diffDays === 0) return "Today";

    const magnitude = Math.abs(diffDays);
    const future = diffDays < 0;

    const unit = (value: number, singular: string): string => {
        const label = value === 1 ? singular : `${singular}s`;
        return future ? `in ${value} ${label}` : `${value} ${label} ago`;
    };

    if (magnitude < 7) return unit(magnitude, "day");
    if (magnitude < 30) return unit(Math.round(magnitude / 7), "week");
    if (magnitude < 365) return unit(Math.round(magnitude / 30), "month");
    return unit(Math.round(magnitude / 365), "year");
}

const WORDS_PER_MINUTE = 200;

/**
 * Post body -> "N min read", the way the public article hero and cards
 * display it. Computed from the HTML content's word count rather than typed
 * by the author, so it can never drift from what's actually on the page.
 */
export function computeReadTime(contentHtml: string): string {
    const text = contentHtml.replace(/<[^>]*>/g, " ");
    const words = text.split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
    return `${minutes} min read`;
}
