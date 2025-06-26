import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageModels } from '@/models/vilaModels';
import Image from 'next/image';

interface ImageCarouselProps {
  imageData: ImageModels[];
}

const ImageCarousel = ({ imageData }: ImageCarouselProps) => {
  const [imageRoom] = useState<ImageModels[]>(imageData); // imageData langsung masuk state (kalau mau manipulasi di masa depan)

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageRoom.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageRoom.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-[85rem] mx-auto  overflow-hidden bg-white">
      <div className="relative flex items-center justify-center h-[20rem] md:h-[80rem] max-h-[45rem]  ">

        {/* Animasi Bingkai */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex} // wajib biar animasi jalan saat index berubah
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center "
          >
            <figure className="w-full h-full flex justify-center items-center">
              <Image 
                src={imageRoom[currentIndex].image} 
                alt={`Slide ${currentIndex + 1}`} 
                width={1400} 
                height={1400} 
                className="h-full w-full object-contain" 
              />
            </figure>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Tombol Prev */}
      <button 
        className="absolute top-1/2 -translate-y-1/2 left-4 text-2xl font-bold text-color1 hover:text-gray-900"
        onClick={prevSlide}
      >
        &lt;
      </button>

      {/* Tombol Next */}
      <button 
        className="absolute top-1/2 -translate-y-1/2 right-4 text-2xl font-bold text-color1 hover:text-gray-900"
        onClick={nextSlide}
      >
        &gt;
      </button>

      {/* Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md text-sm font-medium">
        {currentIndex + 1} / {imageRoom.length}
      </div>
    </div>
  );
};

export default ImageCarousel;
