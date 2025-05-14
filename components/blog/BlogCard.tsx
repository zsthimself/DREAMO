"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { OptimizedCoverImageClient } from "@/components/ui/optimized-image";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
}

interface BlogCardProps {
  post: BlogPost;
  isPriority?: boolean;
}

export default function BlogCard({ post, isPriority = false }: BlogCardProps) {
  return (
    <article className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <OptimizedCoverImageClient 
        src={post.imageUrl} 
        alt={post.title}
        containerClassName="h-48"
        priority={isPriority}
      />
      <div className="relative">
        <span className="absolute top-0 -mt-3 left-3 bg-blue-500 text-white text-xs font-medium px-2.5 py-1 rounded">
          {post.category}
        </span>
      </div>
      
      <div className="flex-1 p-5">
        <p className="text-sm text-gray-500 mb-2">{post.date}</p>
        <h2 className="text-xl font-semibold mb-3 line-clamp-2">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <Link href={`/blog/${post.id}`} className="inline-block">
          <Button variant="outline" size="sm">
            Read More
          </Button>
        </Link>
      </div>
    </article>
  );
} 