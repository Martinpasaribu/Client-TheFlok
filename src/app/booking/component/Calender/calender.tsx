"use client";

import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppDispatch } from "@/lib/hooks/hooks";
import { setCheckIn, setCheckOut } from "@/lib/slice/bookingSlice";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import toast from "react-hot-toast";

interface CalendarProps {
  checkIn: string;
  checkOut: string;
}

const Calendar = ({ checkIn, checkOut }: CalendarProps) => {

  const router = useRouter();
  const dispatch = useAppDispatch();
  const [checkInDate, setCheckInDate] = useState<Date | null>(
    checkIn ? new Date(checkIn) : null
  );
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(
    checkOut ? new Date(checkOut) : null
  );

  // Fungsi untuk memformat tanggal menjadi format ISO
  const formatDate = (date: Date) => {
    return date.toLocaleString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // Format 24 jam
    });
  };


  // Fungsi untuk menambahkan waktu default pada tanggal
  const setDefaultTime = (date: Date, hours: number, minutes: number) => {
    const newDate = new Date(date);
    newDate.setHours(hours, minutes, 0, 0); // Set jam dan menit sesuai
    return newDate;
  };

  useEffect(() => {
    if (checkInDate) {
      const formattedCheckIn = formatDate(checkInDate);
      dispatch(setCheckIn(formattedCheckIn)); // Kirim tanggal check-in yang sudah diformat ke Redux
    }

    if (checkOutDate) {
      const formattedCheckOut = formatDate(checkOutDate);
      dispatch(setCheckOut(formattedCheckOut)); // Kirim tanggal check-out yang sudah diformat ke Redux
  
    
    }
  }, [checkInDate, checkOutDate, dispatch]);


  
  
  const HandleSetDate = () => {
    

    if(checkInDate && checkOutDate) {

      // router.push(`/booking/offers?checkin=${formatDate(checkInDate)}&checkout=${formatDate(checkOutDate)}`);
      
      router.push(
        `/booking/offers?checkin=${checkInDate?.toISOString()}&checkout=${checkOutDate?.toISOString()}&people=${4}`
      );
      
    }else {
      // alert('inputkan checkIn checkOut nya')
      toast.error('Masukan Tanngal Booking.', { position: 'bottom-right', duration: 5000,  iconTheme: { primary: '#604beb',  secondary: '#fff' },  icon: '🗓',  style: {  borderRadius: '10px', background: '#a69ce6', color: '#fff'  },});
    }


    
  
  }
  
  
  return (
    <div className="overflow-hidden">
      <div className="relative h-full w-full pt-[7rem]">
        <h2 className="h-[8rem] max-h-[6rem] w-full text-center text-2xl font-semibold mb-6 text-gray-700 flex-center">
          Book Your Stay
        </h2>

        <div className="flex flex-col w-full bg-gray-100 p-6 rounded-lg shadow-md h-full">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Check-In Date */}
            <div className="w-full sm:w-1/2 flex flex-col items-center">
              <label className="mb-2 text-gray-600 font-medium">Check-In</label>

              <DatePicker
                selected={checkInDate}
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
              <label className="mb-2 text-gray-600 font-medium">Check-Out</label>
              <DatePicker
                selected={checkOutDate}
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


        <div className="w-full h-[5rem] flex justify-end items-center p-5">



              <button onClick={HandleSetDate} className="p-2 bg-color1 text-white">CHECKRATES</button>

  
            
        </div>

      </div>
    </div>
  );
};

export default Calendar;
