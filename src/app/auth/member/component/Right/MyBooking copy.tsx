"use client";

import TransactionSkeletonSecond from '../skeleton/transaction';
import { TransactionModels } from '@/app/order-status/models/models_transaction';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";

const MyBooking = () => {
  const router = useRouter();
  const [transaction, setTransaction] = useState<TransactionModels | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTransactionDetail = async () => {
      setLoading(true);
      // const user = 'd74d20dc-f3ae-42cb-b729-8d3b566a2140';

      try {
        // const response = await fetch(`/api/getTransaction-user?user=${user}`);
        const response = await fetch(`/api/getTransaction-user`);
        
        if (!response.ok) {
          const errorResponse = await response.json();
          const setError = errorResponse.error
          // console.error("Server error:", setError);
          throw new Error(setError || "Server returned an error");
        }
        
        const res = await response.json();

        if (res) {
          setTransaction(res);
        }
      } catch (error: any) {

        // console.error("Error fetching transaction details:", error); // Cetak seluruh objek error
        // console.log("Detail error:", error.message || "No message available");

        toast.error(error.message || "Something went wrong in server", {
          position: "bottom-right",
          duration: 2000,
          iconTheme: { primary: "#C0562F", secondary: "#fff" },
          style: { borderRadius: "10px", background: "#C0562F", color: "#fff" },
        });
        
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
    <div className='bg-white rounded shadow-md p-4'>
      <div className='flex flex-col gap-4'>
        {loading ? (
          <TransactionSkeletonSecond />
        ) : !transaction ? (
          <TransactionSkeletonSecond />
        ) : (
          <div className='flex flex-col gap-4'>
            <div className='w-full text-slate-900 font-semibold'>
              <h1>Adhisthana Vila</h1>
            </div>
            <hr className="top-0 left-0 z-40 h-0 w-full border-b border-solid border-gray-300" />
            <div className='text-slate-700'>
              <ul className='w-full grid grid-cols-5'>
                <li>
                  <h1 className='text-[14px]'>Number Transaction</h1>
                  <h1 className='font-semibold text-[13px]'>{transaction?.bookingId}</h1>
                </li>
                <li>
                  <h1 className='text-[14px]'>Transaction Date</h1>
                  <h1 className='font-semibold text-[13px]'>
                    {transaction?.createdAt ? formatDate(transaction.createdAt) : ''}
                  </h1>
                </li>
                <li>
                  <h1 className='text-[14px]'>Amount</h1>
                  <h1 className='font-semibold text-[14px]'>
                    {convertToRupiah(transaction?.grossAmount || '')}
                  </h1>
                </li>
                <li>
                  <h1 className='text-[14px]'>Status</h1>
                  <h1 className='font-semibold text-[12px]'>{transaction?.status}</h1>
                </li>
                <button onClick={() => handleStatusOrder(transaction.bookingId)} className='text-white w-full flex-center'>
                  <h1 className='max-w-20 bg-blue-600 rounded-md py-1 px-2'>Detail</h1>
                </button>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBooking;
