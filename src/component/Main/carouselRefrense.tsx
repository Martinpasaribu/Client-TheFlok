/* eslint-disable @next/next/no-img-element */
import Closure from "@/component/Main/clouser/clouser";
import Closure2 from "@/component/Main/clouser/clouser2";
import React, { useState, useEffect } from "react";

const CarouselReference = () => {


  
  const slides = [
    {
      image: "/assets/Images_Closure/borobudur-home.jpg",
      title: "Peaceful Retreats in Nature",
      description:
        "With our proximity to local trails and rice paddies, explore the beauty of Central Java by foot or bike. Wander through paths bordered by verdant fields and rivers, or take a leisurely ride through the serene countryside, capturing the charm of local life.",
    },
    {
      image: "/assets/Images_Closure/food-image.jpg",
      title: "Discover Hidden Gems",
      description:
        "Uncover the hidden treasures of Central Java, from lush landscapes to vibrant local culture. Let us guide you to unforgettable experiences.",
    },
    {
      image: "/assets/Images_Closure/sepeda.jpg",
      title: "Unwind in Serenity",
      description:
        "Relax in the tranquil ambiance of our retreat. Surrounded by nature, it's the perfect place to rejuvenate your mind and soul.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Fungsi untuk berpindah ke slide berikutnya
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fungsi untuk berpindah ke slide sebelumnya
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide dengan setInterval
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Ganti 5000 dengan durasi dalam milidetik (5 detik)
    return () => clearInterval(interval); // Membersihkan interval saat komponen unmount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="flex md:hidden justify-center items-center h-[30rem] pt-6">
      <div
        className="relative w-full max-w-[40rem] h-full max-h-[28rem] p-4"
        id="default-carousel"
      >
        {/* Carousel wrapper */}
        <div className="relative h-full overflow-hidden rounded-lg max-h-[30rem]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Closure2
                images={slide.image}
                title={slide.title}
                describe={slide.description}
              />
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-2 left-1/2 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-color1" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        {/* Controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 9l4-4-4-4"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default CarouselReference;
