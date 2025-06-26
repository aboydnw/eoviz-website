import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GlobalErrorHandler } from '@/components/shared/GlobalErrorHandler'
// import { WebVitals } from '@/components/shared/WebVitals'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "eoViz - Modular Geospatial Storytelling Platform",
    template: "%s | eoViz"
  },
  description: "Modular geospatial storytelling platform that connects great science with broader audiences. Deploy like Jekyll, customize like React. Supported by NASA IMPACT.",
  keywords: ["geospatial", "earth observation", "storytelling", "visualization", "NASA", "open source"],
  authors: [{ name: "eoViz Team" }],
  creator: "eoViz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eoviz.com",
    title: "eoViz - Modular Geospatial Storytelling Platform",
    description: "Modular geospatial storytelling platform that connects great science with broader audiences.",
    siteName: "eoViz",
  },
  twitter: {
    card: "summary_large_image",
    title: "eoViz - Modular Geospatial Storytelling Platform",
    description: "Modular geospatial storytelling platform that connects great science with broader audiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalErrorHandler />
        {/* <WebVitals /> */}
        {children}
      </body>
    </html>
  );
}
