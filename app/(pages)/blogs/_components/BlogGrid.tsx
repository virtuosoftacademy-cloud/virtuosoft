'use client'

import { useState } from "react"
import PostCard from "./postCard"
import type { BlogPost } from "./index"

interface BlogGridProps {
    posts: BlogPost[];
}

// Figma node 1971:24037 — 3-up grid with 24px gutters and a "Load More"
// outline pill (node 1971:24174). The design mocks 9 cards; the button only
// renders when there are genuinely more posts left to reveal.
const PAGE_SIZE = 9

function BlogGrid({ posts }: BlogGridProps) {
    const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE)

    const visiblePosts = posts.slice(0, visibleCount)
    const hasMore = visibleCount < posts.length

    return (
        <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {visiblePosts.map((post) => (
                    <PostCard post={post} key={post.id} />
                ))}
            </div>

            {hasMore && (
                <div className="mt-12 flex justify-center">
                    <button
                        type="button"
                        onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                        className="inline-flex h-12 w-[200px] items-center justify-center rounded-full border-[1.5px] border-primary text-base font-bold leading-6 text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                        Load More
                    </button>
                </div>
            )}
        </>
    )
}

export default BlogGrid
