"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GrNext, GrPrevious } from "@/style/icons";
import { ImageModels } from "../../models";
import { motion, AnimatePresence } from "framer-motion";

interface ImageClosureProps {
  images: ImageModels[];
}

const ClouserImage = ({ images }: ImageClosureProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Image container */}
      <div className="relative w-full h-[16rem] overflow-hidden rounded-lg flex justify-center hp-landscape:justify-start">
        <div className="w-full  h-full relative">
          {/* Animasi Bingkai */}
          <AnimatePresence>
            <motion.div
              key={currentIndex} // Wajib agar animasi terjadi setiap index berubah
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className=" flex items-center justify-center w-full h-full"
            >
              <figure className="w-full h-full  flex justify-center items-cover">
                <Image
                  src={images[currentIndex].image}
                  alt={`Image ${currentIndex + 1}`}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover bg-center"
                />
              </figure>
              
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 hover:opacity-100 transition-opacity duration-500">
          <button
            onClick={handlePrevious}
            className="bg-gray-200 text-black rounded-full p-2 hover:bg-color1 hover:text-white transition-all duration-300"
          >
            <GrPrevious size={15} />
          </button>

          <button
            onClick={handleNext}
            className="bg-gray-200 text-black rounded-full p-2 hover:bg-color1 hover:text-white transition-all duration-300"
          >
            <GrNext size={15} />
          </button>
        </div>

        {/* Image indicator */}
        <div className="w-full flex justify-center absolute bottom-4 space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-color1 scale-110" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClouserImage;
