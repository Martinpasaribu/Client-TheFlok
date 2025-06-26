import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ContentModel } from "@/models/instagramModels";
import { FaInstagram } from "@/style/icons";
import { GrFormNextLink, GrFormPreviousLink } from "@/style/icons";

interface ImageCarouselProps {
  content: ContentModel[];
}

const ImageCarousel = ({ content }: ImageCarouselProps) => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4); // Default 4 items per baris
  const [windowWidth, setWindowWidth] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setItemsPerPage(window.innerWidth >= 640 ? 4 : 2);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    if (startIndex + itemsPerPage < content.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="relative flex items-center overflow-hidden gap-2">
      {/* Tombol Previous */}
      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className="p-2 rounded-full backdrop-blur-sm bg-black/20 hover:bg-color1 text-white absolute left-3 z-10"
      >
        <GrFormPreviousLink size={20} />
      </button>

      {/* Kontainer Carousel */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(startIndex * 100) / itemsPerPage}%)`,
        }}
      >
        {content.map((item, index) => {

          return (
            <div
              key={index}
              className="w-1/2 sm:w-1/4 flex-shrink-0 p-2"
            >
              <a
                href={item.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full h-full rounded-md overflow-hidden"
              >
                {/* Gambar utama dengan fallback */}
                <Image
                  src={imageError ? "/assets/ImageInstagram/LoadInstagram.png" : item.media_url}
                  alt={`Adhs ${index + 1}`}
                  width={800}
                  height={800}
                  className={`${imageError ? "w-full h-full max-w-[5rem] max-h-[5rem] object-cover rounded-md m-auto animate-pulse":'w-full h-full   object-cover rounded-md '} `}
                  onError={() => setImageError(true)}
                  unoptimized
                />

                <h1 className={`${imageError ? 'text-center mt-2 text-slate-400':'hidden' }`}> Load...</h1>

                {/* Logo Instagram */}
                <FaInstagram size={25} className="absolute right-2 bottom-2 text-white" />
              </a>
            </div>
          );
        })}
      </div>

      {/* Tombol Next */}
      <button
        onClick={handleNext}
        disabled={startIndex + itemsPerPage >= content.length}
        className="p-2 rounded-full absolute right-3 backdrop-blur-sm bg-black/20 hover:bg-color1 text-white z-10"
      >
        <GrFormNextLink size={20} />
      </button>
    </div>
  );
};

export default ImageCarousel;
