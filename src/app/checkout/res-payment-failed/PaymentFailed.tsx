/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useEffect } from 'react'
import { useRouter, useSearchParams } from "next/navigation";
import toast from 'react-hot-toast';



  
const PaymentFailed = () => {

    const searchParams = useSearchParams();

    const router = useRouter();
  

    useEffect(() => {
      const transactionId = searchParams.get("order_id");
      console.log("Transaction ID dari URL:", transactionId);
  
      if (transactionId) {
        const postUpdateStatus = async (id: any) => {
          try {
            await fetch(`/api/update-status-failed?order_id=${id}`, {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' },
            });
          } catch (error: any) {
            toast.error(error || "server do not responded", {
              position: "bottom-right",
              duration: 5000,
              iconTheme: { primary: "#604beb", secondary: "#fff" },
              icon: "⚠️",
              style: { borderRadius: "10px", background: "#C0562F", color: "#fff" },
            });
          }
        };
      
        // Panggil fungsi setelah deklarasi
        postUpdateStatus(transactionId);
      }
       else {
        toast.error("Id Transaction not found", {
          position: "bottom-right",
          duration: 5000,
          iconTheme: { primary: "#604beb", secondary: "#fff" },
          icon: "⚠️",
          style: { borderRadius: "10px", background: "#C0562F", color: "#fff" },
        });
      }
    }, [searchParams]);
    




    const handleOrderStatus = () => {
  
      router.push("/auth/member");
  
    }

  return (

    <div className='py-[9rem] md:py-[12rem] flex-center flex-col gap-4 md:gap-6'>
          <img src="/assets/Gif/payment-failed.gif" alt="Timeout Response" className='w-full h-full max-w-[16rem] max-h-[18rem] md:max-w-[20rem] md:max-h-[20rem] mb-[1.5rem]' />
          <h1 className='text-color1 text-md sm:text-2xl font-semibold sm:font-bold'> Payment Canceled </h1>
         
         <button className='w-full max-w-[20rem] flex-center'>

            <h1 onClick={handleOrderStatus} className='bg-color2 text-white px-4 py-2 w-full max-w-[18rem] rounded-md font-semibold'>
              Oke
            </h1>

          </button>

    </div>

  )
}

export default PaymentFailed