import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sandhya Sukumaran | Marketing Copywriter",
    template: "%s | Sandhya Sukumaran"
  },
  description: "Portfolio of Sandhya Sukumaran, a Marketing Copywriter with 3+ years of experience in creating high-impact copy for websites, landing pages, paid ads, and email campaigns.",
  keywords: ["Marketing Copywriter", "Creative Copywriting", "SEO Copywriting", "Sandhya Sukumaran", "Copywriter Portfolio", "Toronto Copywriter"],
  authors: [{ name: "Sandhya Sukumaran" }],
  creator: "Sandhya Sukumaran",
  openGraph: {
    title: "Sandhya Sukumaran | Marketing Copywriter",
    description: "Marketing Copywriter crafting high-impact narratives that convert. 3+ years driving results through websites, ads, and email campaigns.",
    url: "https://sandysukumaran.com",
    siteName: "Sandhya Sukumaran Portfolio",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandhya Sukumaran | Marketing Copywriter",
    description: "Marketing Copywriter crafting high-impact narratives that convert.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col selection:bg-neutral-900 selection:text-white">
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
