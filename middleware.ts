import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 判断是否为生产环境
const isProd = process.env.NODE_ENV === 'production';

export function middleware(request: NextRequest) {
  // 在开发环境中，直接返回，不执行中间件逻辑
  if (!isProd) {
    return NextResponse.next();
  }

  // 简单返回响应，不做任何重定向
  // 这可以防止潜在的重定向循环
  return NextResponse.next();
}

export const config = {
  // 只匹配真正需要的路径，避免不必要的处理
  matcher: [
    // 排除静态文件、API路由和其他特殊路径
    '/((?!_next|static|api|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}; 