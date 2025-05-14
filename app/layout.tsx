import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import { OrganizationStructuredData, WebsiteStructuredData } from "@/components/ui/structured-data";
import Head from "./head";

export const metadata: Metadata = {
  title: "Nari Labs - Open-Source Text-to-Speech AI Platform",
  description: "Nari Labs provides high-quality open-source TTS technology, supporting multiple languages and voices, offering developers simple and easy-to-use voice synthesis solutions.",
  keywords: "text-to-speech, TTS, AI voice, speech synthesis, open source TTS, voice AI, Nari Labs",
  authors: [{ name: "Nari Labs Team" }],
  creator: "Nari Labs",
  publisher: "Nari Labs",
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL('https://naridiaai.pro'),
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
    url: 'https://naridiaai.pro',
    siteName: 'Nari Labs',
    title: 'Nari Labs - Open-Source Text-to-Speech AI Platform',
    description: 'High-quality open-source TTS technology supporting multiple languages and voices.',
    images: [
      {
        url: 'https://naridiaai.pro/banner.png',
        width: 1200,
        height: 630,
        alt: 'Nari Labs Banner',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nari Labs - Open-Source TTS AI',
    description: 'High-quality open-source text-to-speech technology supporting multiple languages and voices.',
    images: ['https://naridiaai.pro/banner.png'],
    creator: '@narilabs',
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
          name="Nari Labs"
          url="https://naridiaai.pro"
          logo="https://naridiaai.pro/logo.svg"
          sameAs={[
            "https://github.com/nari-labs",
            "https://twitter.com/narilabs",
            "https://linkedin.com/company/nari-labs"
          ]}
        />
        <WebsiteStructuredData
          name="Nari Labs"
          url="https://naridiaai.pro"
          description="Nari Labs provides high-quality open-source TTS technology, supporting multiple languages and voices, offering developers simple and easy-to-use voice synthesis solutions."
        />
        {children}
      </body>
    </html>
  );
}
