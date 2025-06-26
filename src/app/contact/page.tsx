import React from 'react'
import { Layout } from './Layout'
import type { Metadata } from "next";



export const metadata: Metadata = {
  
  title: "Contact - Adhisthana Villas",
  description: "Hubungi Adhisthana Villas untuk pertanyaan, reservasi, atau informasi lebih lanjut tentang vila kami. Tim kami siap membantu Anda..",
  keywords: "Kontak Adhisthana Villas, Reservasi villa Yogyakarta, Layanan pelanggan vila, Nomor telepon Adhisthana Villas, Booking villa Yogyakarta",
  openGraph: {
    title: "Adhisthana Villas",
    description: "Hubungi Adhisthana Villas untuk pertanyaan, reservasi, atau informasi lebih lanjut tentang vila kami. Tim kami siap membantu Anda..",
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
        <Layout/>
    </main>
  )
}

export default page