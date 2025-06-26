
"use client"

import React from 'react'
import 'leaflet/dist/leaflet.css';
import "@style/globals.css";
// import {Map} from '@/component/Map';


import { FaInstagram } from 'react-icons/fa6';


import dynamic from 'next/dynamic'
import Message from './component/Message';
import Subscribe from './component/subscribe';
import MapEmbed from './component/MapEmbed';

// const Map = dynamic(
//     () => import("@/component/Map").then((component) => component.Map),
//     { ssr: false }
//   );

const handleRedirect = () => {
    const phoneNumber = "6281111177199"; // Format internasional (tanpa "+")
    const message = encodeURIComponent("Halo, saya ingin bertanya mengenai Adhisthana Villas...");
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    // Tambahkan delay sebelum membuka link
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 300);
  };
  
export const Layout = () => {

  return (
    
    <div className=" w-full h-full">
             
        <div className="flex-center bg-contact_bg bg-no-repeat bg-cover bg-center flex-col gap-5 items-center w-full h-[30rem] bg-color3">
            
            <div className='absolute z-20 w-full h-[30rem] bg-opacity-5 bg-color1'></div>

            <h2 className="font-normal text-xl mt-5 tracking-tight">
                Get in Touch
            </h2>
    
            <p className='text-center max-w-[50rem] text-slate-600 px-4 md:px-0 text-[13px] md:text-[17px]'>
                We invite you to connect with us and begin your journey to tranquility at Adhisthana Villas. Whether you have inquiries, need assistance with your booking, or simply want more information about our offerings, we’re here to help. Set within the tranquil landscapes of Central Java, our villas offer a peaceful retreat enriched by the region’s cultural heritage.
            </p>

        </div>


        {/* Message */}

        <div className='w-full h-[45rem] md:max-h-[35rem] '>
            <Message />
        </div>

        {/* location */}
        <section className='w-full h-full'>

            {/* Intro */}
            <div className='grid grid-cols-1 hp-xl:grid-cols-2 h-[30rem] hp-sm:h-[25rem] w-full p-4 gap-5'>

                <div className='w-full flex-center'>

                    <div className='w-full max-w-[30rem] space-y-2'>
                        <h1 className=' text-md md:text-lg font-normal text-color1'> How to Find Us </h1>

                        <p className='text-[11px] md:text-[14px] text-slate-500 font-normal' > 
                            Located a short drive from the iconic Borobudur temple, our villas offer a serene escape within a rich cultural setting. 

                        </p>

                        <p className='text-[11px] md:text-[14px] text-slate-500 font-normal' >
                            Adhisthana Villas is easily accessible from Yogyakarta and Magelang, with scenic routes that take you through lush rice paddies and peaceful villages. For those arriving from Yogyakarta International Airport (YIA), the journey takes approximately 80 minutes by car.
                        </p>
                        
                    </div>

                </div>

                <div className='w-full flex-center'> 

                    <div className='w-full max-w-[30rem] flex flex-col gap-5 ' >

                        <div className='space-y-2 text-center hp-xl:text-left'>
                            <h1 className=' text-md md:text-lg font-normal text-color1'>
                                Location
                            </h1>
                            <p className='text-[11px] md:text-[14px] text-slate-500 font-normal' >
                                Jl. Raya Borobudur, Susukan, Tegalarum, Kec. Borobudur, Kab. Magelang Central Java, Indonesia 56553
                            </p>
                        </div>

                        <div className='space-y-2  text-center hp-xl:text-left'>
                            <h1 className=' text-md md:text-lg font-normal text-color1'>
                                Contact
                            </h1>
                            <div className='text-[11px] md:text-[14px] text-slate-500 font-normal' >            
                                <div className='flex-center gap-2 justify-centre hp-xl:justify-start items-center mb-2'> 
                                    <span className=''>+6281111177199</span> 
                                    <span  onClick={handleRedirect} className='px-2 border-[1px] border-slate-500 rounded-md hover:bg-color2 hover:text-white cursor-pointer'>
                                        WA
                                    </span> 
                                </div>

                                <p> info@adhisthanavillas.com </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            {/* Maps */}
            <div className='mt-4'>
                
                <MapEmbed/>
                {/* <Maps /> */}
                {/* <Map center={{ lng: -0.1278, lat: 51.5074 }} locations={locations} /> */}


            </div>

        </section>



        {/* Bootom */}

        <section className='h-screen w-full bg-bottom_bg bg-no-repeat bg-cover flex-center flex-col text-white '>

            <div className='absolute z-20 w-full h-full bg-opacity-50 bg-gray-900'></div>

            <div className='z-30 flex-center flex-col text-center font-light space-y-4 h-full p-5'>

                <div className='flex-center flex-col gap-5 h-1/2'>
                    <h1 className='text-[15px] md:text-[21px]'> Stay Connected</h1>

                    <p className='text-[15px] w-full max-w-[28rem]'>
                        Join us on Instagram to catch a glimpse of daily life at Adhisthana Villas. Follow along for stunning visuals, exclusive updates, and a closer look at the unique experiences we provide.
                    </p>

                    <FaInstagram size={40} className='text-white ' />

                </div>


                <Subscribe />


            </div>

        </section>


    </div>


  )
}
