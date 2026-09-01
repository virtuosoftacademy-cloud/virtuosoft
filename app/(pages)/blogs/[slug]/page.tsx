// app/blogs/[slug]/page.tsx

import Image from "next/image"
import ReactLenis from "lenis/react"
import HeroBg from "@/public/assets/Images/blog/hero-bg.svg"
import Cta from "@/components/common/Cta"
import { blogPosts, type BlogPost } from "../_components"
import ArticleHero from "./_components/ArticleHero"
import AuthorCard from "./_components/AuthorCard"
import ShareCard from "./_components/ShareCard"
import ArticleToc from "./_components/ArticleToc"
import ShareBar from "./_components/ShareBar"
import RelatedBlogs from "./_components/RelatedBlogs"
import { prepareArticle } from "./_components/articleContent"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

interface StaticParam {
  slug: string;
}

// Helper function
function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

function getRelatedPosts(slug: string): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, 3);
}

export async function generateStaticParams(): Promise<StaticParam[]> {
  return blogPosts.map((post) => ({
    slug: post.slug, // key matches the dynamic segment [slug]
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="container mx-auto max-w-3xl px-4 py-20 h-screen flex justify-center items-center flex-col text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Post Not Found</h2>
        <p className="text-slate-600">The blog post you&apos;re looking for doesn&apos;t exist or has been removed.</p>
      </div>
    );
  }

  const { title, content } = post;
  const { html, sections } = prepareArticle(content || "<p>No content available.</p>");
  const relatedPosts = getRelatedPosts(slug);

  return (
    <ReactLenis root>
      {/* Figma node 1971:23568 — the dark hero band (node 2017:6371) runs the
          full width behind the nav, with the article card overlapping it. */}
      <div className="relative -mt-20 pt-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[441px] overflow-hidden">
          <Image src={HeroBg} alt="" fill priority className="object-cover" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-8 pb-16 md:pt-[52px] lg:px-0">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[824fr_400fr] lg:items-start">
            {/* Left column: hero card, article body, share bar */}
            <div className="flex min-w-0 flex-col gap-6">
              <ArticleHero post={post} />

              <article
                className="text-[#050F21]
                  [&_h2]:mt-10 [&_h2]:mb-5 [&_h2]:scroll-mt-28 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-[1.25] md:[&_h2]:text-[32px]
                  [&_h3]:mt-10 [&_h3]:mb-5 [&_h3]:scroll-mt-28 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:leading-[1.25] md:[&_h3]:text-[32px]
                  [&_h4]:mt-8 [&_h4]:mb-4 [&_h4]:text-xl [&_h4]:font-bold [&_h4]:leading-7
                  [&_p]:mb-5 [&_p]:text-base [&_p]:leading-[22px]
                  [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-5
                  [&_li]:mb-2 [&_li]:text-base [&_li]:leading-[22px]
                  [&_strong]:font-bold
                  [&_a]:text-primary [&_a]:underline-offset-2 hover:[&_a]:underline
                  [&_img]:my-6 [&_img]:w-full [&_img]:rounded-xl
                  [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-5 [&_blockquote]:italic
                  [&>*:first-child]:mt-0"
                dangerouslySetInnerHTML={{ __html: html }}
              />

              <ShareBar title={title} />
            </div>

            {/* Right column: author, share, table of contents */}
            <aside className="flex min-w-0 flex-col gap-6">
              <AuthorCard post={post} />
              <ShareCard title={title} />
              <ArticleToc
                sections={sections}
                thumbnail={post.Src}
                thumbnailAlt={title}
              />
            </aside>
          </div>
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-0">
          <hr className="mb-7 border-t border-[#E8EBF2]" />
          <RelatedBlogs posts={relatedPosts} />
        </div>
      )}

      <Cta />
    </ReactLenis>
  );
}
