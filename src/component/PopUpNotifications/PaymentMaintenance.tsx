"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DayPicker, DateRange, getDefaultClassNames  } from "react-day-picker";
import "react-day-picker/dist/style.css";

import toast from "react-hot-toast";
import { discount, gift, Maintenance } from "@/style/icons";
import Link from "next/link";


interface NoPaymentProps {

  isOpen: boolean;
  closeModal: () => void;

}

const UrlAlaric = "http://booking.adhisthanavillas.com/en/offers?hotel=ADVB";

const NoPayment = ({ isOpen, closeModal }: NoPaymentProps) => {

  

  if (!isOpen) return null;

  return (
    <div className="bg-white fixed inset-0 z-40 flex-center">
      <div className="overflow-hidden bg-white">
        <div className="relative flex flex-col h-full w-full pt-[2rem]">
          <div className="flex flex-col w-full p-6 rounded-lg h-full">
            <div className="flex flex-col items-center">

  
            <div className='w-full hp-landscape:max-w-[25rem]  xl2:max-w-[30rem] flex justify-between hp-landscape:justify-center items-center gap-5 px-2 hp-landscape:p-2 tablet-xl:p-1 xl2:gap-5'>

              <div className='flex-center flex-col gap-2'>
                  <div className='p-3 rounded-full '>
                      <Image src={Maintenance} alt={'maintenance'} className='hidden hp-landscape:block   tablet-lg:w-[25rem] tablet-lg:h-[10rem] object-contain'/>
                      <Image src={Maintenance} alt={'maintenance'} className='block hp-landscape:hidden  w-[20rem] h-[8rem]  object-contain'/>
                  </div>
                  <div className='text-sm font-semibold hp-landscape:text-lg flex flex-col gap-5'>
                    {/* <h1 className="text-slate-500 text-center">Ups.. Sorry </h1> */}
                    
                    <div className="pt-10">

                      <h1 className="mr-2 mb-1 font-bold text-slate-700">
                          Payment method is maintenance stage
                      </h1>

                      <ul className="list-disc">

                        <li className="text-justify text-sm font-normal text-color1"> 
                            You can Use Site Backup, contact Email and Whatsapp Adhisthana Villas to ask directly for booking information 
                        </li>

                      </ul>
  
                    </div>
                  </div>
              </div>    

              {/* <div>
                  <GrNext size={20} />
              </div> */}
            </div>

            </div>
          </div>
          <div className=" flex-center p-5 gap-2">
            <button
              onClick={closeModal}
              className=" w-full py-2 border-color2 border-2 rounded-md max-w-[10rem]"
            >
              OKE
            </button>

            <button
              className=" w-full py-2 border-color2 border-2 rounded-md max-w-[10rem] text-green-600">
              <Link onClick={closeModal} href={UrlAlaric}  className={` flex justify-end sm:justify-center  items-center w-full max-w-[10rem]`}>
            
                Site Backup

              </Link>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NoPayment;
