import type { Metadata } from "next";
import localFont from "next/font/local";

import "@style/globals.css";
import "@style/style.css";

import { Toaster } from "react-hot-toast";
import ClientProvider from "./Provider/ClientProvider/page";
import Script from "next/script";

const geistSans = localFont({
  src: "../style/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../style/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); 

export const metadata: Metadata = {
  title: "The Folk",
  description:"Experience tranquility at The Folk, a luxury retreat near Borobudur. Blending Javanese heritage with modern elegance, our hotel offers a peaceful escape in nature.",
  keywords: "The Folk, hote mewah di Yogyakarta, Penginapan eksklusif Yogyakarta, Resort terbaik di Yogyakarta, Sewa hotel private",
  // icons: [

  //   {
  //     rel: "icon",
  //     type: "image/png",
  //     sizes: "32x32",
  //     url: "https://ik.imagekit.io/dbimagemartech/The%20Folk/flox%20(1).ico?updatedAt=1744000553462",
  //   },


  // ],

  icons: {
    icon: "/favicon.ico", // path favicon (relative ke folder public)
    shortcut: "/folk.ico", // optional
    apple: "/apple-touch-icon.png", // optional jika ada
  },


  openGraph: {
    title: "The Folk",
    description: "Nikmati pengalaman menginap terbaik di The Folk.",
    url: "https://adhisthanahotes.com",
    siteName: "The Folk",
    images: [
      {
        url: "https://adhisthanahotes.com/og2-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Folk",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Folk",
    description: "Nikmati pengalaman menginap terbaik di The Folk.",
    images: ["https://adhisthanahotes.com/og2-image.jpg"],
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
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YGXWFC4JJN"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YGXWFC4JJN');
          `}
        </Script>

        <Toaster position="top-center" />

        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}