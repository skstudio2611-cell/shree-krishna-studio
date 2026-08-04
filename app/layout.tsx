import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shree-krishna-studio.vercel.app"),

  title: {
  default: "Wedding Photographer Surat | Shree Krishna Studio",
  template: "%s | Shree Krishna Studio",
},

description:
  "Shree Krishna Studio is a premium Wedding Photographer in Surat and Gujarat. We specialize in wedding photography, cinematic wedding films, pre wedding shoots, engagement photography, drone coverage, and luxury wedding albums across Gujarat.",

 keywords: [
  "Wedding Photographer Surat",
  "Wedding Photographer Gujarat",
  "Best Wedding Photographer Surat",
  "Wedding Photography Gujarat",
  "Pre Wedding Shoot Gujarat",
  "Pre Wedding Photographer Surat",
  "Wedding Cinematography Surat",
  "Wedding Films Gujarat",
  "Drone Wedding Photography Gujarat",
  "Engagement Photographer Surat",
  "Haldi Photography Gujarat",
  "Reception Photography Surat",
  "Luxury Wedding Photographer Gujarat",
  "Candid Wedding Photographer Surat",
  "Shree Krishna Studio",
],

  authors: [
    {
      name: "Shree Krishna Studio",
    },
  ],

  creator: "Shree Krishna Studio",

  verification: {
    google: "dbJeebzOUcjXtXmOAlWg1YYyhLSOVU7LgIY7kgoGCsQ",
  },

  openGraph: {
    title: "Shree Krishna Studio | Wedding Photography & Films",
    description:
      "Premium Wedding Photography, Cinematic Films & Pre Wedding Shoots in Gujarat.",

    url: "https://shree-krishna-studio.vercel.app",

    siteName: "Shree Krishna Studio",

   images: [
  {
    url: "/images/og-image.png",
    width: 1200,
    height: 630,
    alt: "Shree Krishna Studio",
  },
],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Shree Krishna Studio",

    description:
      "Premium Wedding Photography & Cinematic Films",

    images: ["/images/og-image.png"],
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}

        <GoogleAnalytics gaId="G-18488HL9V0" />
      </body>
    </html>
  );
}