import React from 'react'
import { Layout } from './Layout'
import type { Metadata } from "next";



export const metadata: Metadata = {

  title: "FAQ - Adhisthana Villas",
  description: "Punya pertanyaan tentang pemesanan, layanan, atau fasilitas di Adhisthana Villas? Temukan jawabannya di halaman FAQ kami.",
  keywords: "FAQ Adhisthana Villas, Pertanyaan seputar booking vila, Informasi penginapan yogyakarta, Penginapan mewah Yogyakarta, liburan",
  openGraph: {
    title: "Adhisthana Villas",
    description: "Punya pertanyaan tentang pemesanan, layanan, atau fasilitas di Adhisthana Villas? Temukan jawabannya di halaman FAQ kami.",
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

const Faq = () => {
  return (
    <main className=''>
        <Layout/>
    </main>
  )
}

export default Faq