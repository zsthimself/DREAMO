import { MetadataRoute } from 'next';

// 添加静态导出配置
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://naridiaai.pro';
  
  // 博客文章列表
  const blogPosts = [
    {
      id: "dia-by-nari-labs-new-leader-in-ai-voice",
      lastModified: new Date("2024-05-15"),
    },
    {
      id: "nari-labs-dia-1-6b-tts-model-review",
      lastModified: new Date("2024-05-10"),
    },
    {
      id: "dia-tts-model",
      lastModified: new Date("2024-02-25"),
    },
  ];
  
  // 生成博客文章URL
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: post.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  
  // 主要页面
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];
  
  return [...mainPages, ...blogUrls];
} 