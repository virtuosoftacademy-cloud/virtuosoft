// ============================================================================
// FormData -> typed case-study values, with validation.
// Purpose: Shared helpers for the case-study create + edit actions:
//            - CaseStudyFormState: shape returned to useActionState
//            - Row types for the two repeatable groups (hero stats, impact rows)
//            - parseCaseStudyForm(): reads FormData (scalar fields as-is,
//              industryId from a select, serviceAreaIds from checkboxes,
//              repeatable groups as JSON strings from hidden inputs),
//              validates required fields, returns typed values or errors
// Type: Plain module (importable from actions and the form)
// ============================================================================

import { isRenderableImageSrc } from "@/app/api/lib/blog-actions/blog-image";

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

export type HeroStatRow = { icon: string; value: string; label: string };
export type ImpactRowRow = { icon: string; label: string; before: string; after: string };

export type ParsedCaseStudy = {
    heroTitle: string;
    heroSubtitle: string;
    heroImage: string;
    /** Optional; the card falls back to heroImage when this is blank. */
    thumbnailImage: string | null;
    /** Optional; the "More Case Studies" carousel card hides the logo when blank. */
    logoImage: string | null;
    liveSiteUrl: string | null;
    industryId: number | null;
    serviceAreaIds: number[];
    heroTags: string;
    heroStats: HeroStatRow[];
    summaryHeadingLead: string;
    summaryHeadingAccent: string;
    summaryIntro: string;
    problemTitleLead: string;
    problemTitleAccent: string;
    problemIntro: string;
    problemPoints: string;
    solutionTitleLead: string;
    solutionTitleAccent: string;
    solutionIntro: string;
    solutionPoints: string;
    impactRows: ImpactRowRow[];
    impactNote: string;
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

    const fieldErrors: Record<string, string> = {};
    for (const [key, label] of REQUIRED) {
        if (!get(key)) fieldErrors[key] = `${label} is required.`;
    }

    // Repeatable groups arrive as JSON from the form's hidden inputs.
    const heroStats = json<HeroStatRow[]>(formData.get("heroStatsJson"), []).filter(
        (s) => s.value.trim() || s.label.trim()
    );
    const impactRows = json<ImpactRowRow[]>(formData.get("impactRowsJson"), []).filter(
        (r) => r.label.trim() || r.before.trim() || r.after.trim()
    );

    // Images go through next/image on the card, which throws on anything that
    // isn't a path or an absolute URL — reject it here rather than on the
    // public page. Blank thumbnail/logo is fine; the card falls back to the
    // hero image, and the carousel card just hides the logo overlay.
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
    const logo = get("logoImage");
    if (logo && !isRenderableImageSrc(logo)) {
        fieldErrors.logoImage =
            "Logo image must be a path starting with / or a full http(s) URL.";
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
            logoImage: opt("logoImage"),
            liveSiteUrl: opt("liveSiteUrl"),
            industryId: industryIdRaw ? Number(industryIdRaw) : null,
            serviceAreaIds,
            heroTags: get("heroTags"),
            heroStats: heroStats.map((s) => ({
                icon: s.icon.trim(),
                value: s.value.trim(),
                label: s.label.trim(),
            })),
            summaryHeadingLead: get("summaryHeadingLead"),
            summaryHeadingAccent: get("summaryHeadingAccent"),
            summaryIntro: get("summaryIntro"),
            problemTitleLead: get("problemTitleLead"),
            problemTitleAccent: get("problemTitleAccent"),
            problemIntro: get("problemIntro"),
            problemPoints: get("problemPoints"),
            solutionTitleLead: get("solutionTitleLead"),
            solutionTitleAccent: get("solutionTitleAccent"),
            solutionIntro: get("solutionIntro"),
            solutionPoints: get("solutionPoints"),
            impactRows: impactRows.map((r) => ({
                icon: r.icon.trim(),
                label: r.label.trim(),
                before: r.before.trim(),
                after: r.after.trim(),
            })),
            impactNote: get("impactNote"),
        },
    };
}
