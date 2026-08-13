// app/blogs/[slug]/page.tsx

import { Calendar } from "lucide-react";
import Image from "next/image";
import { blogPosts, type BlogPost } from "../_components";
import ReactLenis from 'lenis/react'

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

  const { title, excerpt, date, category, Src, content } = post;

  return (
    <ReactLenis root>
      <article className="container mx-auto max-w-4xl px-4 pt-32 pb-16 md:pt-38 md:pb-22">
        {/* Hero Image */}
        <div className="relative mb-10 md:mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={Src || "/images/blog-fallback.jpg"} // ← fallback prevents broken images
            alt={title}
            width={400}
            height={475}
            priority
            className="w-full aspect-[16/9] object-cover"
          />
          {category && (
            <div className="absolute top-5 left-5 z-10">
              <span className="inline-block bg-primary capitalize text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                {category}
              </span>
            </div>
          )}
        </div>

        {/* Header */}
        <header className="mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {title}
          </h2>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-slate-600 text-sm mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={date}>{date}</time>
            </div>
            {/* Add author later if needed */}
            {/* <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
            </div> */}
          </div>

          {excerpt && (
            <h3 className="text-2xl md:text-3xl text-slate-700 md:leading-relaxed font-light">
              {excerpt}
            </h3>
          )}
        </header>

        {/* Main Content */}
        <div
          className="prose prose-lg prose-slate max-w-none 
        prose-headings:font-serif prose-headings:font-bold
        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
        prose-p:mb-6 prose-p:leading-relaxed
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: content || "<p>No content available.</p>" }}
        />

        {/* If switching to MDX later, replace above with:
      <div className="prose ...">
        <MDXRemote source={content} components={customComponents} />
      </div> */}
      </article>
    </ReactLenis>
  );
}