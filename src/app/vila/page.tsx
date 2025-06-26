import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {

  title: "Our Vila - Adhisthana Villas",
  description: "Temukan vila terbaik di Adhisthana Villas yang menawarkan fasilitas mewah, pemandangan indah, dan kenyamanan maksimal untuk liburan Anda.",
  keywords: "Vila mewah Yogyakarta, Penginapan eksklusif di Yogyakarta, Fasilitas villa terbaik, Penginapan mewah Yogyakarta, Sewa villa dengan pemandangan indah",
  openGraph: {
    title: "Adhisthana Villas",
    description: "Temukan vila terbaik di Adhisthana Villas yang menawarkan fasilitas mewah, pemandangan indah, dan kenyamanan maksimal untuk liburan Anda.",
    url: "https://adhisthanavillas.com",
    siteName: "Adhisthana Villas",
    images: [
      {
        url: "https://adhisthanavillas.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adhisthana Villas",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adhisthana Villas",
    description: "Nikmati pengalaman menginap terbaik di Adhisthana Villas.",
    images: ["https://adhisthanavillas.com/og-image.jpg"],
  },
};

const page = () => {
  return (
    <div>page</div>
  )
}

export default page