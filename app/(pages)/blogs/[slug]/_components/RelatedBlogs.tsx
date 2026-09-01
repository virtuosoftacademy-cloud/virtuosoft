import PostCard from "../../_components/postCard"
import type { BlogPost } from "../../_components"

interface RelatedBlogsProps {
    posts: BlogPost[];
}

// Figma node 1971:23793 — "Related Blogs" over a 3-up row of the same blog
// post card used on the listing page (node 1971:24039).
function RelatedBlogs({ posts }: RelatedBlogsProps) {
    if (posts.length === 0) {
        return null
    }

    return (
        <section className="flex flex-col gap-7">
            <h2 className="text-2xl font-bold leading-10 text-[#1B1B1F] md:text-[32px]">
                Related Blogs
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <PostCard post={post} key={post.id} />
                ))}
            </div>
        </section>
    )
}

export default RelatedBlogs
