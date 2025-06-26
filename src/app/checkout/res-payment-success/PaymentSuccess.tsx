/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import { useRouter } from "next/navigation";


const PaymentSuccess = () => {

    const router = useRouter();

  const handleOrderStatus = () => {

    router.push("/auth/member");

  }



  return (

    <div className='py-[9rem] md:py-[12rem] flex-center flex-col gap-4 md:gap-6'>
          <img src="/assets/Gif/payment-yes.gif" alt="Timeout Response" className='w-full h-full max-w-[16rem] max-h-[18rem]  md:max-w-[20rem] md:max-h-[20rem]' />
          <h1 className='text-color1 text-md sm:text-2xl font-semibold sm:font-bold'> Payment Completed </h1>
          <button className='w-full max-w-[20rem] flex-center'>

            <h1 onClick={handleOrderStatus} className='bg-color2 text-white px-4 py-2 w-full max-w-[18rem] rounded-md font-semibold'>
              Oke
            </h1>

          </button>
    </div>

  )
}

export default PaymentSuccess