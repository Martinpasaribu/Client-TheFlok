/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react";
import Image from "next/image";


interface ImageGalleryProps {
    images : any
}


const ImageGallery = ({ images } : ImageGalleryProps) => {



  return (
    <div className="relative flex justify-center items-center  -space-x-[3rem] w-full max-w-[45rem]">

      <Image src={images[0]} alt="logo folk" width={600} height={600} className="z-10 md:h-full md:max-h-[30rem] object-contain rounded-md"/>
      <Image src={images[1]} alt="logo folk" width={600} height={600} className="z-20 md:h-full md:max-h-[35rem] object-contain rounded-md"/>
      <Image src={images[2]} alt="logo folk" width={600} height={600} className="z-10 md:h-full md:max-h-[30rem] object-contain rounded-md"/>

    </div>
  );
};

export default ImageGallery;
