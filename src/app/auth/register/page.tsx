import Script from "next/script";
import Layout from "./Layout";
import type { Metadata } from "next";



export const metadata: Metadata = {
  
  title: "Auth - Adhisthana Villas",
  description: "Masuk atau daftar ke akun Adhisthana Villas untuk mengelola pemesanan Anda dengan mudah dan menikmati layanan eksklusif.",
  keywords: "Login Adhisthana Villas, Registrasi akun vila, Member Adhisthana Villas, Registrasi Adhisthana Villas, Akun pemesanan vila",
  openGraph: {
    title: "Adhisthana Villas",
    description: "Masuk atau daftar ke akun Adhisthana Villas untuk mengelola pemesanan Anda dengan mudah dan menikmati layanan eksklusif.",
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
export default function MyApp() {
  return (
    <>
      <Script src="https://www.google.com/recaptcha/api.js?render=6LcEgaYqAAAAAJYATqo66A4IbJlgh6JyGwK2q2Vn" />
      <Layout/>
    </>
  );
}
 