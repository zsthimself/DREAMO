import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import BlogCard from "@/components/blog/BlogCard";

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
    url: "https://narilabs.com/blog",
    siteName: "Nari Labs",
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
    image: "/blog/dreamo-intro.jpg",
    date: "June 10, 2023",
    readTime: "8 min read",
    excerpt: "DreamO introduces a groundbreaking unified framework that addresses multiple image customization tasks simultaneously, revolutionizing personalized image generation with unprecedented flexibility and quality.",
  },
  {
    title: "Technical Deep Dive: How DreamO's VAE Architecture Works",
    slug: "technical-deep-dive-dreamo-vae-architecture",
    image: "/blog/dreamo-technical.jpg",
    date: "July 15, 2023",
    readTime: "12 min read",
    excerpt: "Explore the innovative VAE-based architecture behind DreamO that enables superior feature encoding and preservation across diverse customization scenarios. Learn how this approach outperforms traditional adapter-based methods.",
  },
  {
    title: "Getting Started with DreamO: Practical Implementation Guide",
    slug: "getting-started-with-dreamo-implementation-guide",
    image: "/blog/dreamo-implementation.jpg",
    date: "August 22, 2023",
    readTime: "10 min read",
    excerpt: "Learn how to set up and use DreamO for your own projects. This comprehensive guide walks through installation requirements, optimization options, and best practices for achieving optimal results.",
  },
];

export default function BlogPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            DreamO Blog
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Latest news, technical insights, and implementation guides for ByteDance's DreamO image customization framework
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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