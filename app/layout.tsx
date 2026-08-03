import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {

  metadataBase: new URL(
    "https://your-domain.com"
  ),


  title: {
    default:
      "Shree Krishna Studio | Best Wedding Photographer Gujarat",

    template:
      "%s | Shree Krishna Studio",
  },


  description:
    "Shree Krishna Studio Gujarat provides premium wedding photography, cinematic wedding films, pre wedding shoots, engagement photography, haldi, reception and drone wedding coverage.",

  verification: {
  google: "dbJeebzOUcjXtXmOAlWg1YYyhLSOVU7LgIY7kgoGCsQ",
}, 
  

  keywords: [

    "Shree Krishna Studio",

    "Wedding Photographer Gujarat",

    "Wedding Photographer Surat",

    "Best Wedding Photography Gujarat",

    "Cinematic Wedding Films",

    "Pre Wedding Photographer",

    "Wedding Videography",

    "Drone Wedding Photography",

    "Luxury Wedding Photographer",

    "Wedding Album Design",

  ],



  authors:[
    {
      name:
      "Shree Krishna Studio"
    }
  ],



  creator:
    "Shree Krishna Studio",



  publisher:
    "Shree Krishna Studio",




  openGraph:{


    title:
    "Shree Krishna Studio | Wedding Photography & Films",


    description:
    "Premium wedding photography and cinematic films capturing your forever moments.",


    url:
    "https://your-domain.com",


    siteName:
    "Shree Krishna Studio",


    locale:
    "en_IN",


    type:
    "website",


    images:[

      {
        url:
        "/images/hero.jpg",

        width:
        1200,

        height:
        630,

        alt:
        "Shree Krishna Studio Wedding Photography",

      }

    ]

  },





  twitter:{


    card:
    "summary_large_image",


    title:
    "Shree Krishna Studio | Wedding Photographer",


    description:
    "Premium Wedding Photography & Cinematic Films Gujarat",


    images:[
      "/images/hero.jpg"
    ]

  },





  icons:{


    icon:
    "/favicon.png",


    shortcut:
    "/favicon.png",


    apple:
    "/favicon.png",

  },





  robots:{


    index:true,

    follow:true,


    googleBot:{


      index:true,

      follow:true,


    }

  },


};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html
      lang="en"
      className="h-full antialiased"
    >


      <body
        className="
        min-h-full
        flex
        flex-col
        "
      >

        {children}


      </body>


    </html>

  );

}