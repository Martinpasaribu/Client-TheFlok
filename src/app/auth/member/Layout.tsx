"use client";


import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Left from "./component/Left/Left";
import MyBooking from "./component/Right/MyBooking";
import ChangeProfile from "./component/Right/ChangeProfile";
import ChangePassword from "./component/Right/ChangePassword";
import LeftMini from "./component/Left/LeftMini";

export default function Login() {

  const [filter, setFilter] = useState<string>("Booking"); // State untuk filter
  const router = useRouter();
  // Fungsi untuk memperbarui filter dari komponen Left
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  // Ini hanya digunakan oleh user yang checkout dengan user baru agar tetap ter-verification
  useEffect(() => {
    const shouldRedirect = localStorage.getItem("cek");
    if (shouldRedirect) {
      localStorage.removeItem("cek");

      window.location.reload();
    }
  }, [router]);

  return (
    <div className="flex flex-col gap-2 items-center pt-[3rem] sm:pt-[7rem] min-h-screen overflow-hidden">
       
      {/* Head */}
      <div className="w-full max-w-[80rem] p-2 mt-4 hp-lg:p-8 text-center  hp-xl:text-left">
        <h1 className="text-2xl font-bold text-color1 "> Member </h1>
      </div>

      {/* Body */}
      <div className="w-full max-w-[80rem] flex flex-row h-full relative">
        
        {/* Left */}
        <div className="hidden  xl:flex justify-center items-center w-full max-w-[20rem] h-full max-h-[15rem]">
          <Left setView={handleFilterChange}  />
        </div>

        <div className="flex fixed bottom-2  xl:hidden justify-center items-center sm:bottom-10  p-4  rounded shadow-md  text-white w-full max-w-[80rem] h-full max-h-[8rem]  z-40">

          <LeftMini setView={handleFilterChange}/>

        </div>

        {/* Right */}
        <div className="flex flex-col gap-3 w-full max-w-[90rem] p-2 hp-lg:p-3 ">
            
            <div className=" text-slate-700 text-[13px] px-4 xl:px-0">
              <h1> Member &#62;	  {filter} </h1>
            </div>



            <div className="h-full">

              {filter === "Booking" && <MyBooking />}
              {filter === "Profile" && <ChangeProfile />}
              {filter === "Password" && <ChangePassword />}

            </div>
        </div>
      </div>
    </div>
  );
}
