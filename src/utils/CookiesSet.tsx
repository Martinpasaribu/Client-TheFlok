"use client"; // Pastikan ini ada karena kita menggunakan localStorage

import { useEffect, useState } from "react";
import Image from "next/image";
import { Cookies } from "@/style/icons";

interface CookieProps {
  active: boolean | null;
  closeModal: () => void;
}

const EnableCookies = ({ active, closeModal }: CookieProps) => {


  
    if (!active) return null; // Jangan pakai `false`, karena harus return React node


  return (
    <div className="fixed inset-0 z-40 w-screen overflow-y-auto bg-opacity-50 bg-gray-900">
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl text-center">
          <h1 className="text-2xl font-bold text-color1 mb-4">Enable Cookies</h1>

          <div className="w-full flex-center h-full">
            <Image
              src={Cookies}
              alt="image cookies"
              width={200}
              height={200}
              className="w-[12rem] h-[12rem] max-w-[10rem] max-h-[8rem] object-cover"
            />
          </div>

          <p className="text-gray-600 mb-6">
            Cookies are required to enhance your experience and access certain features. Please enable cookies in your browser settings.
          </p>

          <div className="flex justify-around items-center">
            <button onClick={() => closeModal()} className="">
              <h1 className="hover:bg-color2 hover:text-white rounded-md px-4 py-1 border-2 border-color2">Accept</h1>
            </button>

            <button onClick={() => closeModal()} className="">
              <h1 className="hover:bg-color2 hover:text-white rounded-md px-4 py-1 border-2 border-color2">Reject</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnableCookies;
