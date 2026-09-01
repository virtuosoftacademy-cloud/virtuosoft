// ============================================================================
// Shared case-study view model: used by the public detail page AND the admin editor.
// Purpose: CaseStudyDetailProps + toDetailProps(), converting the relational
//          (blog-style) CaseStudy row into the component's props:
//            - LongText paragraph columns  -> split("\n\n"), like blog content
//            - one-per-line Text columns   -> split("\n")
//            - Industry / ServiceArea lookup relations -> label / label[]
//            - child tables (cards/timeline/services) -> mapped arrays
//            - flattened callout columns   -> callout object (or undefined)
//          The row must be fetched WITH its relations — use the
//          caseStudyInclude below in the query.
// ============================================================================
import type {
    CaseStudy,
    ApproachCard,
    TimelinePhase,
    RelatedService,
    Industry,
    ServiceArea,
} from "@/generated/prisma/client";

export interface CaseStudyDetailProps {
    heroTitle?: string;
    heroSubtitle?: string;
    heroImage?: string;
    industry?: string;
    serviceAreas?: string[];
    /** Rich text (HTML), or legacy plain text — render via toSafeHtml. */
    summary?: string;
    situation?: {
        paragraphs?: string[];
        questions?: string[];
        closing?: string;
    };
    /** Rich text (HTML), or legacy plain text — render via toSafeHtml. */
    challenge?: string;
    approach?: {
        intro?: string[];
        cards?: { title: string; description: string }[];
    };
    timeline?: { phase: string; duration: string }[];
    outcome?: string[];
    keyResults?: string[];
    relatedServices?: { href: string; label: string }[];
    callout?: {
        heading: string;
        text: string;
        buttonHref: string;
        buttonLabel: string;
    } | null;
}

/** Pass to prisma.caseStudy.findUnique/findMany so relations arrive ordered. */
export const caseStudyInclude = {
    industry: true,
    serviceAreas: { orderBy: { label: "asc" as const } },
    approachCards: { orderBy: { order: "asc" as const } },
    timeline: { orderBy: { order: "asc" as const } },
    relatedServices: { orderBy: { order: "asc" as const } },
};

type CaseStudyWithRelations = CaseStudy & {
    industry: Industry | null;
    serviceAreas: ServiceArea[];
    approachCards: ApproachCard[];
    timeline: TimelinePhase[];
    relatedServices: RelatedService[];
};

const paragraphs = (text: string): string[] =>
    text.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);

const lines = (text: string): string[] =>
    text.split("\n").map((l) => l.trim()).filter(Boolean);

/** Prisma CaseStudy row (with relations) -> props for <CaseStudyDetail />. */
export function toDetailProps(row: CaseStudyWithRelations): CaseStudyDetailProps {
    return {
        heroTitle: row.heroTitle,
        heroSubtitle: row.heroSubtitle,
        heroImage: row.heroImage,
        industry: row.industry?.label,
        serviceAreas: row.serviceAreas.map((a) => a.label),
        summary: row.summary,
        situation: {
            paragraphs: paragraphs(row.situationParagraphs),
            questions: lines(row.situationQuestions),
            closing: row.situationClosing ?? undefined,
        },
        // Left whole rather than split into paragraphs: this field is edited
        // as rich text, so the stored value is HTML the page injects directly.
        challenge: row.challenge,
        approach: {
            intro: paragraphs(row.approachIntro),
            cards: row.approachCards.map(({ title, description }) => ({
                title,
                description,
            })),
        },
        timeline: row.timeline.map(({ phase, duration }) => ({ phase, duration })),
        outcome: paragraphs(row.outcome),
        keyResults: lines(row.keyResults),
        relatedServices: row.relatedServices.map(({ href, label }) => ({
            href,
            label,
        })),
        callout: row.calloutHeading
            ? {
                  heading: row.calloutHeading,
                  text: row.calloutText ?? "",
                  buttonHref: row.calloutButtonHref ?? "/contact",
                  buttonLabel: row.calloutButtonLabel ?? "Get in touch",
              }
            : null,
    };
}