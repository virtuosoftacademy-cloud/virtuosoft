import React from 'react'
import Cta from '@/components/common/Cta'
import BlogGrid from './_components/BlogGrid'
import BlogHero from './_components/BlogHero'
import FeaturedPost from './_components/FeaturedPost'
import { blogPosts } from './_components'

// Figma: Blog page frame 1971:24031
function Blogs(): React.JSX.Element {
    const [featuredPost] = blogPosts

    return (
        <>
            <BlogHero />

            <section className="mx-auto mt-14 max-w-7xl px-6 md:mt-16 md:px-10 lg:px-0">
                <h2 className="text-3xl font-bold leading-10 text-[#050f21] md:text-[32px]">
                    Latest
                </h2>

                {featuredPost && (
                    <div className="mt-8">
                        <FeaturedPost post={featuredPost} />
                    </div>
                )}

                <div className="mt-14 md:mt-16">
                    <BlogGrid posts={blogPosts} />
                </div>
            </section>

            <Cta />
        </>
    )
}

export default Blogs
