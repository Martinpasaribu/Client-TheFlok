"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { RoomModels } from "@/models/roomModels";
import { GrFormNextLink, GrFormPreviousLink } from "@/style/icons";
import { useRouter } from 'next/navigation';


interface VilaProps {
  InitialsVila: RoomModels[];
}

const Vila = ({ InitialsVila }: VilaProps) => {
  const [vila, setVila] = useState<RoomModels[]>([]);
  const [startIndex, setStartIndex] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const fetchVila = async () => {
      try {
        const response = await fetch("/api/vila");
        const data = await response.json();
        setVila(data.data);
        console.log("Data fetched:", data.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchVila();
  }, []);

  const handleDetailRoom = (id:any) => {

    router.push(`/vila/${id}`);

  }

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % vila.length);
  };
  
  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + vila.length) % vila.length);
  };
  

  return (
    <div className="sm:my-10 my-8">
      <div className="relative flex items-center overflow-hidden gap-2">
        {/* Tombol Previous */}
        <button
          onClick={handlePrev}
          // disabled={startIndex === 0}
          className="p-2 rounded-full backdrop-blur-sm bg-black/20 hover:bg-color1 text-white absolute left-16 z-10"
        >
          <GrFormPreviousLink size={20} />
        </button>

        {/* Kontainer Elemen */}
        <div className="flex justify-center items-center w-full h-auto animate-muncul">
          {vila.length > 0 && (
            <div
              key={vila[startIndex]._id}
              className="max-width md:h-screen flex-col-reverse flex-center sm:flex-row gap-8 px-4 text-center text-xs md:text-lg font-[family-name:var(--font-geist-sans)]"
            >
              <div className="text-slate-600 max-w-[35rem] sm:w-1/2 flex flex-col gap-10 text-left">
                <div className="flex flex-col gap-8">
                  <h1 className="text-color2 font-semibold text-center sm:text-left animate-muncul">
                    {vila[startIndex].nameAdditional}
                  </h1>
                  <h2 className="text-slate-600 text-[10px] hp-xl:text-[14px] animate-modal text-center sm:text-left">{vila[startIndex].describe}</h2>
                </div>

                <div className="flex flex-row sm:flex-col justify-around sm:justify-start items-start gap-4 animate-sidebar_top text-[10px] hp-xl:text-[14px]">
                  <button onClick={() => { handleDetailRoom(vila[startIndex]._id) }} className="underline decoration-[#C0562F] text-color1">
                    <h1>Vila Details</h1>
                  </button>
                  <button className="underline decoration-[#C0562F] text-color1">
                    <h1>Check Availability</h1>
                  </button>
                </div>
                
              </div>

              <div className="underline decoration-[#C0562F] text-color1 w-full max-w-[25rem] sm:w-1/2 animate-muncul">
                <Image
                  src={ vila[startIndex].image[0].image || "/assets/Image/imagenf.jpg"}// Ganti dengan vila[startIndex].image jika memiliki URL gambar
                  alt="image sementara"
                  width={800}
                  height={400}
                  className="w-full h-full max-h-[15rem] md:max-h-full object-cover rounded-md"
                />
              </div>
            </div>
          )}
        </div>

        {/* Tombol Next */}
        <button
          onClick={handleNext}
          // disabled={startIndex >= vila.length - 1}
          className="p-2 rounded-full  backdrop-blur-sm bg-black/20 hover:bg-color1 text-white absolute right-16 z-10"
        >
          <GrFormNextLink size={20} />
        </button>
      </div>
    </div>
  );
};

export default Vila;
