"use client"


// console.log('ENV:', process.env.INSTAGRAM_ACCESS_TOKEN);

import Link from "next/link";
import Image from "next/image";
import Script from 'next/script';
import Closure from "../component/Main/clouser/clouser";
import InstagramProfile from "../component/Main/instagram/C_Instagram";
import ImageGallery from "../component/Main/ImageGalerry/ImageGallery";
import Vila from "./vila/room/Vila";
import GoogleRecaptcha from "@/utils/GoogleRecaptcha";
import EnableCookies from "@/utils/CookiesSet";
import { useEffect, useState } from "react";
import MainLoading from "@/component/mainLoading/loading";
import CarouselReference from "@/component/Main/carouselRefrense";
import SetBooking from "./booking/Book/SetBooking";


export default function Home() {

  <Script src="https://www.google.com/recaptcha/api.js?render=6LcEgaYqAAAAAJYATqo66A4IbJlgh6JyGwK2q2Vn" />

  const [cookie, setCookie] = useState<null | boolean>(null);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    setCookie(cookiesAccepted === "true" ? false : true);
  }, []);

  const handleClose = (accepted: boolean) => {
    localStorage.setItem("cookiesAccepted", accepted ? "true" : "false");
    setCookie(false);
  };

  
  const Images_Gallery = [
    "/assets/ImageGallery/gallery01.jpg",
    "/assets/ImageGallery/gallery02.jpg",
    "/assets/ImageGallery/gallery03.jpg",
  ]; // Masukkan URL gambar Anda di sini


  return (
    
    <main className=' relative flex flex-col font-sans bg-white  dark:bg-black '>
        
          <EnableCookies active={cookie} closeModal={() => handleClose(true)} />


        <section className="relative flex justify-center bg-home_bg bg-no-repeat bg-cover bg-center w-full h-screen  ">

          <div className="absolute -bottom-[3rem] w-full max-w-[70rem]">
            <SetBooking/>
          </div>

        </section>


        <section className="w-full h-screen  flex-center">
          
          <Image src="/assets/Image/traveling.png" alt="logo folk" width={600} height={600} className="md:h-full md:max-h-[35rem] object-contain rounded-md"/>

        </section>


        <section className="w-full h-screen  flex-center overflow-hidden">          
              
          <ImageGallery images={Images_Gallery} />

        </section>
          



          {/* Instagram */}
          <div className="mt-[8rem] mb-[8rem]  max-width flex flex-col justify-center items-center gap-8 font-[family-name:var(--font-geist-sans)] p-2">
        
            <InstagramProfile act={process.env.INSTAGRAM_ACCESS_TOKEN || ''} id={ Number(process.env.INSTAGRAM_USER_ID) || 0}/>

          </div>


      </main>

  );
}
