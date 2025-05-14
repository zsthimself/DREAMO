"use client";

import Image from "next/image";

interface BlogPostImageProps {
  src: string;
  alt: string;
  caption?: string;
}

const BlogPostImage = ({ src, alt, caption }: BlogPostImageProps) => {
  return (
    <figure className="my-8">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-200">
        <Image 
          src={src} 
          alt={alt} 
          fill 
          className="object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default BlogPostImage; 