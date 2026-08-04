import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shree-krishna-studio.vercel.app"),

  title: {
    default: "Shree Krishna Studio | Wedding Photography & Films",
    template: "%s | Shree Krishna Studio",
  },

  description:
    "Premium Wedding Photography, Cinematic Films, Pre Wedding Shoots, Drone Coverage, Wedding Albums and Event Photography across Gujarat.",

  keywords: [
    "Shree Krishna Studio",
    "Wedding Photographer Gujarat",
    "Wedding Photographer Surat",
    "Wedding Photography",
    "Wedding Cinematography",
    "Pre Wedding Shoot",
    "Drone Wedding Shoot",
    "Wedding Films",
    "Wedding Albums",
    "Event Photography",
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