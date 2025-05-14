import { MetadataRoute } from 'next';

// 添加静态导出配置
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://narilabs.com/sitemap.xml',
  };
} 