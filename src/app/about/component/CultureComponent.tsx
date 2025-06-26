"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AirIcons, TreeIcons, WayangIcons } from "@/style/icons";

export const CultureComponent = () => {


    return (
      <div className="max-width md:h-screen flex-center flex-col gap-8 md:px-4 text-center font-[family-name:var(--font-geist-sans)]">
        
        <div className='w-full max-w-[90rem] grid grid-cols-3 gap-1 md:gap-10 text-slate-600'>

          <div className='flex flex-col justify-center items-center gap-4 md:gap-10 p-4'>

            <h1 className="text-color2 text-md md:text-lg font-normal">Sustainability</h1>

            <div className="underline decoration-[#C0562F] text-color1 h-full w-full">
               
               <Image
                 src={TreeIcons}
                 alt='image sementara'
                 width={600}
                 height={500}
                 className="w-full h-full  max-h-[5rem]  md:max-h-22 md:w-max-h-22 object-contain"
               />
             
            </div>

            <h3 className='text-[11px] md:text-[14px] font-normal'>
              We prioritize eco-friendly practices to minimize our environmental impact.
            </h3>

          </div>

          <div className='flex flex-col justify-center items-center gap-4 md:gap-10 p-4'>

            <h1 className="text-color2 text-md md:text-lg font-normal" >Cultural Respect</h1>

            <div className="underline decoration-[#C0562F] text-color1 h-full w-full">
               
               <Image
                 src={WayangIcons}
                 alt='image sementara'
                 width={600}
                 height={500}
                 className="w-full h-full  max-h-[5rem]  md:max-h-22 md:w-max-h-22 object-contain "
               />
             
            </div>

            <h3 className='text-sm'>
              Our villas honor the legacy of Javanese heritage, from architecture to local community support.
            </h3>

          </div>

          <div className='flex flex-col justify-center items-center gap-4 md:gap-10 p-4'>

            <h1 className="text-color2 text-md md:text-lg font-normal">Serenity</h1>

            <div className="underline decoration-[#C0562F] text-color1 w-full h-full">
               
               <Image
                 src={AirIcons}
                 alt='image sementara'
                 width={600}
                 height={500}
                 className="w-full h-full  max-h-[5rem]  md:max-h-22 md:w-max-h-22 object-contain "
               />
             
            </div>

            <h3 className='text-[11px] hp-xl:text-sm'>
              We offer a peaceful sanctuary where guests can unwind and reconnect with nature.
            </h3>

          </div>

        </div>

      </div> 
    );
};
