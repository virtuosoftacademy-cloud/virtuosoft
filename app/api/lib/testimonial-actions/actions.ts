// Request-scoped (via React's cache) instead of a top-level await — see
// getBlogData in blog-actions/blogActions.ts for why. Returns an empty
// array (rather than throwing) if the DB call fails or no admin has added
// a real testimonial yet, so the caller can skip rendering the section.
import { cache } from "react";
import { prisma } from "@/app/api/lib/prisma";
import { type GlobalTestimonial } from "@/app/_constant";

/** First two initials of each word in the name, e.g. "Maxin Will" -> "MW". */
function initialsOf(name: string): string {
    return name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0]?.toUpperCase() ?? "")
        .join("");
}

export const getTestimonials = cache(async (): Promise<GlobalTestimonial[]> => {
    try {
        const rows = await prisma.testimonial.findMany({
            orderBy: [{ order: "asc" }, { createdAt: "desc" }],
        });

        return rows.map((row) => ({
            rating: row.rating,
            quote: row.quote,
            name: row.name,
            role: row.role,
            initials: initialsOf(row.name),
        }));
    } catch {
        return [];
    }
});
