"use client";

import React from 'react';
import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'alt'> {
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  fallbackSrc = '/placeholder-image.jpg',
  priority = false,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      placeholder="blur"
      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNlOWVkZjIiLz4KPC9zdmc+"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        if (target.src !== fallbackSrc) {
          target.src = fallbackSrc;
        }
      }}
      priority={priority}
      {...props}
    />
  );
}

interface OptimizedCoverImageProps extends Omit<ImageProps, 'alt' | 'fill'> {
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackSrc?: string;
}

export function OptimizedCoverImage({
  src,
  alt,
  className,
  containerClassName,
  fallbackSrc = '/placeholder-image.jpg',
  priority = false,
  ...props
}: OptimizedCoverImageProps) {
  return (
    <div className={`relative overflow-hidden ${containerClassName || ''}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${className || ''}`}
        loading={priority ? 'eager' : 'lazy'}
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNlOWVkZjIiLz4KPC9zdmc+"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          if (target.src !== fallbackSrc) {
            target.src = fallbackSrc;
          }
        }}
        priority={priority}
        {...props}
      />
    </div>
  );
}

// 为了向后兼容，导出别名
export const OptimizedImageClient = OptimizedImage;
export const OptimizedCoverImageClient = OptimizedCoverImage; 