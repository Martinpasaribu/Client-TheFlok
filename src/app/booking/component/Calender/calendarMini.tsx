"use client"

import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";
import { setCheckIn, setCheckOut } from "@/lib/slice/bookingSlice";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { formatDate, setDefaultTime } from "../constant/formatDate";
import { formatLocalISOIn, formatLocalISOOut } from "../constant";

interface CalendarProps {
  checkIn?: Date | null;
  checkOut?: Date | null;
  isOpen: boolean;
  closeModal : () =>  void;

}

const CalendarMini = ({ checkIn, isOpen, closeModal, checkOut, }: CalendarProps) => {



  const dispatch = useAppDispatch();
  
  const [checkInDate, setCheckInDate] = useState<Date | null>(
    checkIn ? new Date(checkIn) : null
  );
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(
    checkOut ? new Date(checkOut) : null
  );

  const [checkin, setCheckInDay] = useState(checkIn) // Konversi Date ke string ISO atau gunakan null
  
  
  const [checkout, setCheckOutDay] = useState(checkOut) //

  const handleUpdateDate = () => {
    // changeIn(checkInDate)
    // changeOut(checkOutDate)
    // console.log("new", checkInDate)
    // console.log("new", checkOutDate)

    if (checkInDate) {
      dispatch(setCheckIn( checkInDate ? formatLocalISOIn(checkInDate) : null));

    }

    if (checkOutDate) {
      dispatch(setCheckOut( checkOutDate ? formatLocalISOOut(checkOutDate) : null));

    
    }
  }

  if (!isOpen) return null ;

  
  return (

    <div className=" bg-white fixed inset-0 z-30 flex-center">

      <div className="overflow-hidden  bg-white">
      
        <div className="relative flex flex-col h-full w-full pt-[7rem]">


          <div className="flex flex-col w-full  p-6 rounded-lg shadow-md h-full">
            <div className="flex flex-col sm:flex-row gap-6 text-md md:text-2xl text-black">
              {/* Check-In Date */}
              <div className="w-full sm:w-1/2 flex flex-col items-center">
                <label className="mb-5 text-gray-600 font-medium ">Check-In</label>
                <DatePicker
                  selected={checkin}
                  onChange={(date) => {
                    if (date) {
                      const defaultCheckInTime = setDefaultTime(date, 12, 0); // Set ke 12:00 PM
                      setCheckInDate(defaultCheckInTime);

                      // Reset check-out jika check-in diubah
                      if (checkOutDate && checkOutDate <= defaultCheckInTime) {
                        setCheckOutDate(null);
                      }
                    }
                  }}
                  minDate={new Date()} // Tidak boleh sebelum hari ini
                  placeholderText="Select Check-In Date"
                  className="border rounded-lg focus:outline-none focus:ring focus:border-blue-300 w-full"
                  inline
                />
              </div>

              {/* Check-Out Date */}
              <div className="w-full sm:w-1/2 flex flex-col items-center">
                <label className="mb-5 text-gray-600 font-medium">Check-Out</label>
                <DatePicker
                  selected={checkout}
                  onChange={(date) => {
                    if (date) {
                      const defaultCheckOutTime = setDefaultTime(date, 11, 0); // Set ke 11:00 AM
                      setCheckOutDate(defaultCheckOutTime);
                    }
                  }}
                  minDate={
                    checkInDate
                      ? new Date(checkInDate.getTime() + 24 * 60 * 60 * 1000) // Minimal 1 hari setelah check-in
                      : new Date()
                  }
                  placeholderText="Select Check-Out Date"
                  className="border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  inline
                />
              </div>
            </div>
          </div>


          <div className=" w-full  flex-center p-5 ">

                <button onClick={() => { handleUpdateDate(); closeModal();}} className="w-full py-2 border-color2 border-2 rounded-md">CHANGE</button>
              
          </div>

        </div>

      </div>

    </div>
  );
};

export default CalendarMini;
