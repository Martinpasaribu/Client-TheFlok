import React from 'react'
import { Layout } from './Layout'
import type { Metadata } from "next";



export const metadata: Metadata = {

  title: "Privacy-Policy - Adhisthana Villas",
  description: "Pelajari kebijakan privasi dan syarat & ketentuan pemesanan di Adhisthana Villas untuk memastikan pengalaman menginap yang nyaman dan aman.",
  keywords: "Kebijakan privasi Adhisthana Villas, Syarat & ketentuan pemesanan, Hak & kewajiban pelanggan, Penginapan mewah Yogyakarta, liburan",
  openGraph: {
    title: "Adhisthana Villas",
    description: "Pelajari kebijakan privasi dan syarat & ketentuan pemesanan di Adhisthana Villas untuk memastikan pengalaman menginap yang nyaman dan aman.",
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