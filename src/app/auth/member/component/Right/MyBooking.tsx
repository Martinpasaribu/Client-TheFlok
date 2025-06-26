"use client";

import TransactionSkeletonSecond from '../skeleton/transaction';
import { TransactionModels } from '@/app/order-status/models/models_transaction';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";
import accessTokens from '@/utils/accesToken';

const MyBooking = () => {
  const router = useRouter();
  const [transaction, setTransaction] = useState<TransactionModels[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTransactionDetail = async () => {
      setLoading(true);


      try {

        const response = await accessTokens.get(`/transaction/get-transaction-user`);

    
        if (response) {
          setTransaction(response.data.data);
        }

      } catch (error: any) {
        // Debug error handling
        // console.error("Error fetching transaction details:", error); // Cetak seluruh objek error
        // console.log("Detail error:", error.message || "No message available");

        toast.error(error.response?.data?.message || error.message || "Something went wrong in server", {
          position: "bottom-right",
          duration: 2000,
          iconTheme: { primary: "#C0562F", secondary: "#fff" },
          style: { borderRadius: "10px", background: "#C0562F", color: "#fff" },
        });

        setTimeout(() => {
          router.push("/auth/login");
        }, 3000);

      } finally {
        setLoading(false); // Pastikan loading dihentikan di akhir
      }
    };

    getTransactionDetail();
  }, []);




  // Helper functions and render logic
  const handleStatusOrder = (trx: any) => {
    router.push(`/order-status?order_id=${trx}`);
  };

  const formatDate = (dateString: any) => {
    if (dateString) {
      const date = new Date(dateString);
      return date.toLocaleString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour12: false,
      });
    }
  };

  const convertToRupiah = (number: any) => {
    return number.toLocaleString('id-ID', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  return (
    <div className='bg-white hp-lg:p-2 shadow-md  border-t-[1px] border-slate-400 rounded-md'>
      <div className='flex flex-col gap-2'>
        {loading ? (
          

          <div className='space-y-5'>

            <TransactionSkeletonSecond />
            <TransactionSkeletonSecond />
            <TransactionSkeletonSecond />


          </div>

          
          
        ) :  !transaction ? (

          <div className='space-y-5'>

            <TransactionSkeletonSecond />
            <TransactionSkeletonSecond />
            <TransactionSkeletonSecond />


          </div>

        ) : (

          <div className='flex flex-col gap-4 space-y-5 h-full max-h-[30rem] overflow-auto p-2'>
            { transaction.map((item, index) => (
          
              <div key={index} className='flex flex-col gap-3 rounded-md p-2 shadow-md'>
                <div className='w-full text-slate-900 font-semibold'>
                  <h1>Adhisthana Vila</h1>
                </div>
                <hr className="top-0 left-0 z-30 h-0 w-full border-b border-solid border-orange-200" />
                <div className='text-slate-700'>
                  <ul className='w-full grid grid-cols-2 md:grid-cols-5 gap-4'>
                    <li>
                      <h1 className='text-[14px]'>Number Transaction</h1>
                      <h1 className='font-semibold text-[13px]'>{item?.bookingId}</h1>
                    </li>
                    <li>
                      <h1 className='text-[14px]'>Transaction Date</h1>
                      <h1 className='font-semibold text-[13px]'>
                        {item?.createdAt ? formatDate(item.createdAt) : ''}
                      </h1>
                    </li>
                    <li>
                      <h1 className='text-[14px]'>Amount</h1>
                      <h1 className='font-semibold text-[14px]'>
                        {convertToRupiah(item?.grossAmount || '')}
                      </h1>
                    </li>

                    <li>
                      <h1 className='text-[14px]'>Status</h1>
                      <h1 className='font-semibold text-[12px]'>{item?.status}</h1>
                    </li>

                    <button onClick={() => handleStatusOrder(item.bookingId)} className='text-white w-full flex md:justify-center justify-end md:items-center col-span-2 md:col-span-1'>
                      <h1 className='max-w-20 bg-blue-600 rounded-md py-1 px-2'>Detail</h1>
                    </button>
                  </ul>
                </div>
              </div>

            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBooking;
