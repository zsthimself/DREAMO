"use client";

import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  slug: string;
  image: string;
  date: string;
  readTime: string;
  excerpt: string;
}

const BlogCard = ({
  title,
  slug,
  image,
  date,
  readTime,
  excerpt,
}: BlogCardProps) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="overflow-hidden rounded-lg border border-gray-200 transition-all duration-300 hover:border-blue-500 hover:shadow-lg">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <div className="mb-3 flex items-center space-x-2 text-sm text-gray-500">
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
          <h3 className="mb-3 text-xl font-bold text-gray-900 line-clamp-2">
            {title}
          </h3>
          <p className="mb-4 text-gray-600 line-clamp-3">{excerpt}</p>
          <div className="flex items-center text-blue-600 font-medium">
            Read more <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard; 