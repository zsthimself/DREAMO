import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import { OrganizationStructuredData, WebsiteStructuredData } from "@/components/ui/structured-data";
import Head from "./head";

export const metadata: Metadata = {
  title: "DreamO - ByteDance AI Text-to-Image Model",
  description: "DreamO is an advanced text-to-image generation AI model developed by ByteDance, offering high-quality image synthesis with exceptional detail and creative capabilities.",
  keywords: "DreamO, AI, text-to-image, image generation, ByteDance, AI model, deep learning, generative AI",
  authors: [{ name: "ByteDance Research Team" }],
  creator: "ByteDance",
  publisher: "ByteDance",
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL('https://dreamo.ai'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dreamo.ai',
    siteName: 'DreamO',
    title: 'DreamO - ByteDance AI Text-to-Image Model',
    description: 'Advanced AI text-to-image generation model with exceptional quality and creative capabilities.',
    images: [
      {
        url: 'https://dreamo.ai/banner.png',
        width: 1200,
        height: 630,
        alt: 'DreamO Banner',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DreamO - ByteDance AI Text-to-Image Model',
    description: 'Advanced AI text-to-image generation model with exceptional quality and creative capabilities.',
    images: ['https://dreamo.ai/banner.png'],
    creator: '@ByteDance',
  }
};

export const dynamic = "force-static";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head />
      <body className="font-sans">
        <OrganizationStructuredData 
          name="ByteDance - DreamO"
          url="https://dreamo.ai"
          logo="https://dreamo.ai/logo.svg"
          sameAs={[
            "https://github.com/bytedance",
            "https://twitter.com/bytedance",
            "https://linkedin.com/company/bytedance"
          ]}
        />
        <WebsiteStructuredData
          name="DreamO"
          url="https://dreamo.ai"
          description="DreamO is an advanced text-to-image generation AI model developed by ByteDance, offering high-quality image synthesis with exceptional detail and creative capabilities."
        />
        {children}
      </body>
    </html>
  );
}
