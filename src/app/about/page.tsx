
import React from 'react'
import Layout from './Layout'
import type { Metadata } from "next";



export const metadata: Metadata = {

  title: "About Us - Adhisthana Villas",
  description: "Kenali lebih dekat Adhisthana Villas, vila eksklusif dengan layanan berkualitas tinggi di Yogyakarta. Kami berkomitmen untuk memberikan pengalaman menginap terbaik bagi Anda..",
  keywords: "Tentang Adhisthana Villas, Sejarah Adhisthana Villas, Layanan eksklusif vila, Penginapan mewah Yogyakarta, liburan",
  openGraph: {
    title: "Adhisthana Villas",
    description: "Nikmati pengalaman menginap terbaik di Adhisthana Villas.",
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
    
    <main>
        
        <Layout />

    </main>
  )
}

export default page