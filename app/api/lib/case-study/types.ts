// ============================================================================
// Shared case-study view model: used by the public detail page AND the admin
// editor. Purpose: CaseStudyDetailProps + toDetailProps(), converting the
// relational CaseStudy row (hero + Problem/Solution panels + Impact rows)
// into the component's props — one-per-line Text columns split on "\n",
// child tables mapped to arrays. The row must be fetched WITH its relations
// — use the caseStudyInclude below in the query.
// ============================================================================
import type {
    CaseStudy,
    CaseStudyHeroStat,
    CaseStudyImpactRow,
    Industry,
    ServiceArea,
} from "@/generated/prisma/client";

export type HeroStatIcon = "institutions" | "users" | "funding";
export type ImpactRowIcon = "efficiency" | "latency" | "availability" | "delivery";

export interface CaseStudyDetailProps {
    heroTitle: string;
    heroSubtitle?: string;
    heroImage?: string;
    liveSiteUrl?: string;
    industry?: string;
    heroTags: string[];
    heroStats: { icon: HeroStatIcon; value: string; label: string }[];
    summaryHeading?: { lead: string; accent: string };
    summaryIntro?: string;
    problem?: { titleLead: string; titleAccent: string; intro: string; points: string[] };
    solution?: { titleLead: string; titleAccent: string; intro: string; points: string[] };
    impactRows: { icon: ImpactRowIcon; label: string; before: string; after: string }[];
    impactNote?: string;
}

/** Pass to prisma.caseStudy.findUnique/findMany so relations arrive ordered. */
export const caseStudyInclude = {
    industry: true,
    serviceAreas: { orderBy: { label: "asc" as const } },
    heroStats: { orderBy: { order: "asc" as const } },
    impactRows: { orderBy: { order: "asc" as const } },
};

type CaseStudyWithRelations = CaseStudy & {
    industry: Industry | null;
    serviceAreas: ServiceArea[];
    heroStats: CaseStudyHeroStat[];
    impactRows: CaseStudyImpactRow[];
};

const lines = (text: string): string[] =>
    text.split("\n").map((l) => l.trim()).filter(Boolean);

/** Prisma CaseStudy row (with relations) -> props for the detail page. */
export function toDetailProps(row: CaseStudyWithRelations): CaseStudyDetailProps {
    const hasProblem = Boolean(row.problemTitleLead && row.problemIntro);
    const hasSolution = Boolean(row.solutionTitleLead && row.solutionIntro);

    return {
        heroTitle: row.heroTitle,
        heroSubtitle: row.heroSubtitle,
        heroImage: row.heroImage,
        liveSiteUrl: row.liveSiteUrl ?? undefined,
        industry: row.industry?.label,
        heroTags: lines(row.heroTags),
        heroStats: row.heroStats.map(({ icon, value, label }) => ({
            icon: icon as HeroStatIcon,
            value,
            label,
        })),
        summaryHeading:
            row.summaryHeadingLead && row.summaryHeadingAccent
                ? { lead: row.summaryHeadingLead, accent: row.summaryHeadingAccent }
                : undefined,
        summaryIntro: row.summaryIntro || undefined,
        problem: hasProblem
            ? {
                  titleLead: row.problemTitleLead,
                  titleAccent: row.problemTitleAccent,
                  intro: row.problemIntro,
                  points: lines(row.problemPoints),
              }
            : undefined,
        solution: hasSolution
            ? {
                  titleLead: row.solutionTitleLead,
                  titleAccent: row.solutionTitleAccent,
                  intro: row.solutionIntro,
                  points: lines(row.solutionPoints),
              }
            : undefined,
        impactRows: row.impactRows.map(({ icon, label, before, after }) => ({
            icon: icon as ImpactRowIcon,
            label,
            before,
            after,
        })),
        impactNote: row.impactNote || undefined,
    };
}
