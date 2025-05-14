import type { Metadata } from "next";
import BlogCard from "@/components/blog/BlogCard";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "DreamO Blog - Latest Updates and Insights",
  description: "Stay updated with the latest news, tutorials, and insights about DreamO, ByteDance's unified framework for image customization.",
  keywords: "DreamO, image customization, ByteDance, VAE architecture, implementation guide",
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: "DreamO Blog",
    description: "Stay updated with the latest news, tutorials, and insights about DreamO, ByteDance's unified framework for image customization.",
    url: "https://dreamo.pro/blog",
    siteName: "DreamO",
    locale: "en_US",
    type: "website",
  }
};

// 添加静态导出配置
export const dynamic = "force-static";

const posts = [
  {
    title: "Introducing DreamO: A Unified Framework for Image Customization",
    slug: "introducing-dreamo-unified-framework",
    image: "/banner.png",
    date: "June 10, 2023",
    readTime: "8 min read",
    excerpt: "DreamO introduces a groundbreaking unified framework that addresses multiple image customization tasks simultaneously, revolutionizing personalized image generation with unprecedented flexibility and quality.",
  },
  {
    title: "Technical Deep Dive: How DreamO's VAE Architecture Works",
    slug: "technical-deep-dive-dreamo-vae-architecture",
    image: "/banner.png",
    date: "July 15, 2023",
    readTime: "12 min read",
    excerpt: "Explore the innovative VAE-based architecture behind DreamO that enables superior feature encoding and preservation across diverse customization scenarios. Learn how this approach outperforms traditional adapter-based methods.",
  },
  {
    title: "Getting Started with DreamO: Practical Implementation Guide",
    slug: "getting-started-with-dreamo-implementation-guide",
    image: "/banner.png",
    date: "August 22, 2023",
    readTime: "10 min read",
    excerpt: "Learn how to set up and use DreamO for your own projects. This comprehensive guide walks through installation requirements, optimization options, and best practices for achieving optimal results.",
  },
];

export default function BlogPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            DreamO Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Latest news, technical insights, and implementation guides for ByteDance's DreamO image customization framework
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              slug={post.slug}
              image={post.image}
              date={post.date}
              readTime={post.readTime}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
} 