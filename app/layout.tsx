import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const baseUrl = 'https://tdcdevs.xyz';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Tanzania Developers Community (TDC)",
  description: "The official digital hub for developers in Tanzania. Connect, learn, and grow with the largest tech community in the region.",
  applicationName: "TDC",
  authors: [{ name: "Tanzania Developer Community", url: baseUrl }],
  generator: "Next.js",
  keywords: ["Tanzania", "Developers", "Community", "TDC", "Tech", "Coding", "Africa", "Software Engineering", "Web Development", "Programming", "East Africa"],
  referrer: "origin-when-cross-origin",
  creator: "Tanzania Developer Community",
  publisher: "Tanzania Developer Community",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },

  openGraph: {
    title: "Tanzania Developers Community (TDC)",
    description: "The official digital hub for developers in Tanzania. Connect, learn, and grow with the largest tech community in the region.",
    url: baseUrl,
    siteName: "Tanzania Developers Community",
    images: [
      {
        url: `${baseUrl}/tdc.png`,
        width: 1200,
        height: 630,
        alt: "Tanzania Developers Community",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanzania Developers Community (TDC)",
    description: "The official digital hub for developers in Tanzania. Connect, learn, and grow with the largest tech community in the region.",
    creator: "@tdc",
    images: [`${baseUrl}/tdc.png`],
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tanzania Developers Community',
    alternateName: 'TDC',
    url: baseUrl,
    logo: `${baseUrl}/tdclogo.png`,
    description: 'The official digital hub for developers in Tanzania. Connect, learn, and grow with the largest tech community in the region.',
    sameAs: [
      // Add social media profiles here
      // 'https://twitter.com/tdc',
      // 'https://github.com/tdc',
      // 'https://linkedin.com/company/tdc',
    ],
  };

  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        className={`${inter.variable} flex h-full flex-col bg-zinc-50 dark:bg-black font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
