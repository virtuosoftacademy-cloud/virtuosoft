
import { cache } from "react";
import { prisma } from "@/lib/prisma";

// Request-scoped (via React's cache) instead of a module-level top-level
// await — a top-level await runs once at import time with no isolation
// per request, no error handling, and fires immediately in every build
// worker that imports this module, which overwhelmed the DB connection
// pool during builds. This runs lazily, once per request, and degrades
// to empty defaults instead of crashing the page if the DB call fails.
export const getBlogData = cache(async () => {
  try {
    const [featured, categories, sidebarPosts, blogPosts] = await Promise.all([
      prisma.blogPost.findFirst({
        where: { isFeatured: true },
        include: { category: true },
        orderBy: { date: "desc" },
      }),
      prisma.blogCategory.findMany({
        orderBy: { label: "asc" },
        include: { posts: { orderBy: { date: "desc" } } },
      }),
      prisma.blogPost.findMany({
        where: { isSidebar: true },
        orderBy: { date: "desc" },
      }),
      prisma.blogPost.findMany({
        orderBy: { date: "desc" },
        take: 2,
        include: { category: { select: { label: true } } },
      }),
    ]);
    return { featured, categories, sidebarPosts, blogPosts };
  } catch {
    return { featured: null, categories: [], sidebarPosts: [], blogPosts: [] };
  }
});
