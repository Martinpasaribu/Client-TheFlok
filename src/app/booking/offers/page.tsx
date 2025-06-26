
import React, { Suspense } from 'react'
import Layout from './Layout'
import type { Metadata } from "next";



export const metadata: Metadata = {
  
  title: "Offers - Adhisthana Villas",
  description: "Pesan vila impian Anda di Adhisthana Villas sekarang dan nikmati berbagai penawaran spesial untuk pengalaman menginap yang luar biasa di Yogyakarta.",
  keywords: "villa, Reservasi vila online, Harga sewa vila eksklusif, Promo villa Yogyakarta, Booking villa Yogyakarta",
  openGraph: {
    title: "Adhisthana Villas",
    description: "Pesan vila impian Anda di Adhisthana Villas sekarang dan nikmati berbagai penawaran spesial untuk pengalaman menginap yang luar biasa di Yogyakarta.",
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


const Offers = () => {


  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Layout />
    </Suspense>
  )
}

export default Offers