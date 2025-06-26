"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DayPicker, DateRange, getDefaultClassNames  } from "react-day-picker";
import "react-day-picker/dist/style.css";

import toast from "react-hot-toast";
import { discount, gift, GrNext } from "@/style/icons";


interface CalendarProps {

  isOpen: boolean;
  closeModal: () => void;

}

const Discount = ({ isOpen, closeModal }: CalendarProps) => {

  

  if (!isOpen) return null;

  return (
    <div className="bg-white fixed inset-0 z-40 flex-center">
      <div className="overflow-hidden bg-white">
        <div className="relative flex flex-col h-full w-full pt-[2rem]">
          <div className="flex flex-col w-full p-6 rounded-lg shadow-md h-full">
            <div className="flex flex-col items-center">

  
            <div className='w-full border-[1px] shadow-md rounded-xl  hp-landscape:max-w-[25rem]  xl2:max-w-[30rem] flex justify-between hp-landscape:justify-center items-center gap-5 px-2 hp-landscape:p-2 tablet-xl:p-1 xl2:gap-5'>

              <div className='flex-center gap-2'>
                  <div className='p-3 rounded-full '>
                      <Image src={gift} alt={'gift'} className='hidden hp-landscape:block w-5 h-5 tablet-lg:w-7 tablet-lg:h-7 object-contain'/>
                      <Image src={discount} alt={'discount'} className='block hp-landscape:hidden w-7 h-7 tablet-lg:w-8 tablet-lg:h-8 object-contain'/>
                  </div>
                  <div className='text-sm font-semibold hp-landscape:text-lg'>
                  <h1 className="mr-2">
                      Discount Unavailable
                  </h1>
                  </div>
              </div>    

              {/* <div>
                  <GrNext size={20} />
              </div> */}
            </div>

            </div>
          </div>
          <div className="w-full flex-center p-5">
            <button
              onClick={closeModal}
              className="w-full py-2 border-color2 border-2 rounded-md"
            >
              OKE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
