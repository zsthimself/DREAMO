import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import BlogCard from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Blog - Nari Labs | AI Voice Technology Insights",
  description: "Explore the latest advancements in AI voice synthesis, tutorials, and industry insights from Nari Labs, the open-source text-to-speech platform.",
  keywords: "AI voice blog, text-to-speech tutorials, TTS technology, voice synthesis research, Nari Labs blog",
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: "Blog - Nari Labs",
    description: "Explore the latest advancements in AI voice synthesis and text-to-speech technology",
    url: "https://narilabs.com/blog",
    siteName: "Nari Labs",
    locale: "en_US",
    type: "website",
  }
};

// 添加静态导出配置
export const dynamic = "force-static";

// Blog post list
const blogPosts = [
  {
    id: "dia-by-nari-labs-new-leader-in-ai-voice",
    title: "Dia by Nari Labs: The New Leader in AI Voice Technology",
    excerpt: "An in-depth look at how Dia, developed by two relatively inexperienced developers with no external funding, is redefining AI voice capabilities with superior emotional expression and non-verbal sound generation.",
    date: "May 15, 2024",
    imageUrl: "/blog/dia-nari-labs-voice.svg",
    category: "AI Voice Technology"
  },
  {
    id: "nari-labs-dia-1-6b-tts-model-review",
    title: "Nari Labs DIA-1.6B: A Revolutionary Open-Source TTS Model for Realistic Dialogues",
    excerpt: "An in-depth review of the newly released DIA-1.6B text-to-speech model from Nari Labs, designed for local use with impressive multi-speaker dialogue capabilities and non-verbal communication features.",
    date: "May 10, 2024",
    imageUrl: "/blog/nari-labs-dia-model.svg",
    category: "AI Technology"
  },
  {
    id: "dia-tts-model",
    title: "DIA: An Open-Source TTS Model Surpassing ElevenLabs",
    excerpt: "How a zero-funded open-source TTS model developed by two undergraduates outperforms ElevenLabs and Sesame in emotional tone, dialogue flow, and non-verbal realism.",
    date: "February 25, 2024",
    imageUrl: "/blog/dia-tts-model.svg", // Using our created SVG image
    category: "AI Technology"
  },
  // You can add other blog posts
];

export default function BlogPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Nari Labs Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the latest advancements in AI voice synthesis, tutorials, and industry insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard 
              key={post.id} 
              post={post} 
              isPriority={index === 0}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
} 