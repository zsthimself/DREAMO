"use client";

import { OptimizedCoverImageClient } from "@/components/ui/optimized-image";

interface BlogPostImageProps {
  src: string;
  alt: string;
}

export default function BlogPostImage({ src, alt }: BlogPostImageProps) {
  return (
    <OptimizedCoverImageClient 
      src={src} 
      alt={alt}
      containerClassName="w-full h-[400px] rounded-lg overflow-hidden"
      priority
    />
  );
} 