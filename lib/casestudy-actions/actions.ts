// Server data-access — a FUNCTION, not a top-level awaited value.
import { cache } from "react";
import { prisma } from "@/lib/prisma";
import { isRenderableImageSrc, FALLBACK_POST_IMAGE } from "@/lib/blog-actions/blog-image";

// cache() dedupes across components in the same request; the try/catch
// degrades to an empty list instead of crashing the page (or the build's
// static generation) if the DB call fails — same pattern as getBlogData
// in lib/blogActions.ts.
export const getCaseStudyCards = cache(async () => {
    try {
        return await prisma.caseStudy.findMany({
            orderBy: { updatedAt: "desc" },
            select: {
                id: true,
                slug: true,
                heroTitle: true,
                heroSubtitle: true,
                heroImage: true,
                thumbnailImage: true,
                industry: { select: { label: true } },
                serviceAreas: { select: { label: true }, orderBy: { label: "asc" } },
            },
        });
    } catch {
        return [];
    }
});


import { type CaseStudyCardProps } from "@/app/(pages)/case-studies/_components/ui/CaseStudyCard";

type CaseStudyCardRow = {
    id: string;
    slug: string;
    heroTitle: string;
    heroSubtitle: string;
    heroImage: string;
    thumbnailImage: string | null;
    industry: { label: string } | null;
    serviceAreas: { label: string }[];
};

export function toCard(row: CaseStudyCardRow): CaseStudyCardProps {
    return {
        id: row.id,
        // Prefer the card-specific thumbnail; heroImage is cropped for a
        // full-bleed banner, so it often loses its subject in a 3:2 card.
        // Checked because next/image throws on a value it can't parse, and
        // rows predating input validation may hold free text.
        image: [row.thumbnailImage, row.heroImage].find(isRenderableImageSrc)
            ?? FALLBACK_POST_IMAGE,
        imageAlt: row.heroTitle,
        category: row.industry?.label ?? "",
        title: row.heroTitle,
        summary: row.heroSubtitle,
        serviceAreas: row.serviceAreas.map((a) => a.label),
        href: `/case-studies/${row.slug}`,
    };
}