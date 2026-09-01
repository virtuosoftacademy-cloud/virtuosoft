// ============================================================================
// FormData -> typed case-study values, with validation.
// Purpose: Shared helpers for the case-study create + edit actions:
//            - CaseStudyFormState: shape returned to useActionState
//            - Row types for the three repeatable groups
//            - parseCaseStudyForm(): reads FormData (scalar fields as-is,
//              industryId from a select, serviceAreaIds from checkboxes,
//              repeatable groups as JSON strings from hidden inputs),
//              validates required fields, returns typed values or errors
// Type: Plain module (importable from actions and the form)
// ============================================================================

import { isRenderableImageSrc } from "@/lib/blog-actions/blog-image";
import { isEmptyRichText } from "@/lib/rich-text";

export type CaseStudyFormState = {
    error?: string;
    fieldErrors?: Partial<Record<string, string>>;
    /**
     * What was submitted, echoed back so a rejected save can be re-rendered
     * with the admin's own text still in place. React resets an uncontrolled
     * form once its action resolves, so without this one missing field would
     * blank out everything else that had been typed.
     */
    values?: ParsedCaseStudy;
};

export type CardRow = { title: string; description: string };
export type TimelineRow = { phase: string; duration: string };
export type ServiceRow = { label: string; href: string };

export type ParsedCaseStudy = {
    heroTitle: string;
    heroSubtitle: string;
    heroImage: string;
    /** Optional; the card falls back to heroImage when this is blank. */
    thumbnailImage: string | null;
    industryId: number | null;
    serviceAreaIds: number[];
    summary: string;
    situationParagraphs: string;
    situationQuestions: string;
    situationClosing: string | null;
    challenge: string;
    approachIntro: string;
    outcome: string;
    keyResults: string;
    calloutHeading: string | null;
    calloutText: string | null;
    calloutButtonHref: string | null;
    calloutButtonLabel: string | null;
    cards: CardRow[];
    timeline: TimelineRow[];
    services: ServiceRow[];
};

// Only the hero is mandatory — it supplies the title (and therefore the slug),
// the strapline and the banner, so a case study cannot exist without it.
// Everything else may be filled in later; the public page hides whatever
// section is still empty rather than printing a bare heading.
const REQUIRED: [key: string, label: string][] = [
    ["heroTitle", "Hero title"],
    ["heroSubtitle", "Hero subtitle"],
    ["heroImage", "Hero image"],
    ["thumbnailImage", "Card thumbnail"],
];

function json<T>(raw: FormDataEntryValue | null, fallback: T): T {
    if (typeof raw !== "string" || !raw) return fallback;
    try {
        return JSON.parse(raw) as T;
    } catch {
        return fallback;
    }
}

// Always returns `values` — even when invalid — so the caller can hand the
// submitted text back to the form. Callers must check `fieldErrors` before
// writing anything to the database.
export function parseCaseStudyForm(formData: FormData): {
    values: ParsedCaseStudy;
    fieldErrors?: Record<string, string>;
} {
    const get = (k: string) => String(formData.get(k) ?? "").trim();
    const opt = (k: string) => {
        const v = get(k);
        return v ? v : null;
    };

    // Blank unless the editor actually holds something visible.
    const richText = (k: string) => {
        const v = get(k);
        return v && !isEmptyRichText(v) ? v : "";
    };

    const fieldErrors: Record<string, string> = {};
    for (const [key, label] of REQUIRED) {
        if (!get(key)) fieldErrors[key] = `${label} is required.`;
    }

    // Repeatable groups arrive as JSON from the form's hidden inputs.
    const cards = json<CardRow[]>(formData.get("cardsJson"), []).filter(
        (c) => c.title.trim() || c.description.trim()
    );
    const timeline = json<TimelineRow[]>(formData.get("timelineJson"), []).filter(
        (t) => t.phase.trim() || t.duration.trim()
    );
    const services = json<ServiceRow[]>(formData.get("servicesJson"), []).filter(
        (s) => s.label.trim() || s.href.trim()
    );

    // Images go through next/image on the card, which throws on anything that
    // isn't a path or an absolute URL — reject it here rather than on the
    // public page. Blank thumbnail is fine; the card falls back to the hero.
    const heroImage = get("heroImage");
    if (heroImage && !isRenderableImageSrc(heroImage)) {
        fieldErrors.heroImage =
            "Hero image must be a path starting with / or a full http(s) URL.";
    }
    const thumbnail = get("thumbnailImage");
    if (thumbnail && !isRenderableImageSrc(thumbnail)) {
        fieldErrors.thumbnailImage =
            "Card thumbnail must be a path starting with / or a full http(s) URL.";
    }

    // A service with a label needs an internal href (guards javascript: etc.)
    for (const s of services) {
        if (s.href && !s.href.startsWith("/")) {
            fieldErrors.services = "Service links must be internal paths starting with /.";
            break;
        }
    }

    const industryIdRaw = get("industryId");
    const serviceAreaIds = formData
        .getAll("serviceAreaIds")
        .map((v) => Number(v))
        .filter((n) => Number.isInteger(n) && n > 0);

    return {
        fieldErrors:
            Object.keys(fieldErrors).length > 0 ? fieldErrors : undefined,
        values: {
            heroTitle: get("heroTitle"),
            heroSubtitle: get("heroSubtitle"),
            heroImage: get("heroImage"),
            thumbnailImage: opt("thumbnailImage"),
            industryId: industryIdRaw ? Number(industryIdRaw) : null,
            serviceAreaIds,
            summary: richText("summary"),
            situationParagraphs: get("situationParagraphs"),
            situationQuestions: get("situationQuestions"),
            situationClosing: opt("situationClosing"),
            // Rich text: an untouched editor serialises as "<p></p>", which is
            // truthy and would make an empty Challenge section render on the
            // public page. Normalise it to a blank string.
            challenge: richText("challenge"),
            approachIntro: get("approachIntro"),
            outcome: get("outcome"),
            keyResults: get("keyResults"),
            calloutHeading: opt("calloutHeading"),
            calloutText: opt("calloutText"),
            calloutButtonHref: opt("calloutButtonHref"),
            calloutButtonLabel: opt("calloutButtonLabel"),
            cards: cards.map((c) => ({ title: c.title.trim(), description: c.description.trim() })),
            timeline: timeline.map((t) => ({ phase: t.phase.trim(), duration: t.duration.trim() })),
            services: services.map((s) => ({ label: s.label.trim(), href: s.href.trim() })),
        },
    };
}