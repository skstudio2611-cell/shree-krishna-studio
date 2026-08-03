import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {

  metadataBase: new URL(
    "https://shree-krishna-studio.vercel.app"
  ),

  title: {
    default:
      "Shree Krishna Studio | Wedding Photography & Films",
    template:
      "%s | Shree Krishna Studio",
  },

  description:
    "Shree Krishna Studio captures weddings, pre-weddings, engagements, haldi, receptions, cinematic films, drone coverage, and premium albums across Gujarat.",


  keywords: [
    "Shree Krishna Studio",
    "Wedding Photographer Gujarat",
    "Wedding Photography Surat",
    "Wedding Cinematography",
    "Pre Wedding Shoot",
    "Engagement Photography",
    "Haldi Photography",
    "Reception Photography",
    "Drone Wedding Shoot",
    "Wedding Films",
  ],


  authors: [
    {
      name: "Shree Krishna Studio",
    },
  ],


  creator:
    "Shree Krishna Studio",


  openGraph: {

    title:
      "Shree Krishna Studio | Wedding Photography & Films",

    description:
      "Premium Wedding Photography, Cinematic Films & Pre Wedding Shoots in Gujarat.",

    url:
      "https://shree-krishna-studio.vercel.app",

    siteName:
      "Shree Krishna Studio",

    locale:
      "en_IN",

    type:
      "website",
  },


  icons: {

    icon:
      "/favicon.png",

    shortcut:
      "/favicon.png",

    apple:
      "/favicon.png",

  },


  robots: {

    index:
      true,

    follow:
      true,

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

      </body>

    </html>

  );

}