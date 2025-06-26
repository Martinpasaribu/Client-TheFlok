"use client"

import { RoomModels } from '@/models/roomModels'
import React, { useEffect, useState } from 'react'

import { useAppDispatch } from '@/lib/hooks/hooks';
import { setAddChart, setAddVila, setRemoveVila, setIsProcessing } from '@/lib/slice/bookingSlice';
import { http } from '@/utils/http';

import toast from 'react-hot-toast';
import debounce from 'lodash-es/debounce';
import { BucketModels } from '../../models';




interface SelectProps {
    item : string;
    name : string;
    chart : BucketModels[];
    handleAddChart : (id: string) =>  void ;


}



const SelectButton = ( { item, name, chart , handleAddChart } : SelectProps ) => {
    
    const [active , setActive] = useState (false)
    const [ pty, setPty] = useState<number >(0)
    const [alert, setAlert] = useState(false)
    const dispatch = useAppDispatch();
    
    useEffect(() => {
    
        if(item){
            
            const actived = chart.some((chartItem) => chartItem.data.some((dataItem) => dataItem._id === item))
            setActive(actived);

            const matchingChartItem = chart.find((chartItem) =>  chartItem.data.some((dataItem) => dataItem._id === item));
            const  quantity = matchingChartItem?.quantity;

            if( matchingChartItem ){
                const Room = matchingChartItem.data.find((dataItem: any) => dataItem._id === item); // Cari dataItem
                
                // Perubahan karena menggunakan short room Availiable
                // const max = Room?.available;

                const max = Room?.availableCount;
                
                if( max === quantity ){
                    setAlert(max? true : false)
                    console.log(max, '===', quantity)
                }else{
                    setAlert(false)
                }
            }


            setPty(quantity? quantity: 0)
            
           
        }

    }, [item, chart])

    // deleted vila to session
    const handleRemoveVila =  debounce( async () => {


        dispatch(setIsProcessing(true));
        dispatch(setRemoveVila(item)); 


        http.post(`/session/del-to-cart`, { itemId : item }, {
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => {
            // console.log('Cart synced successfully:', response.data);
            
        toast.success(`Deleted ${name}`, {
            position: "bottom-right",
            duration: 1000,
            iconTheme: { primary: "#C0562F", secondary: "#fff" },
            icon: "🛒",
            style: { borderRadius: "10px", background: "#C0562F", color: "#fff" },
          });

        })
        .catch(error => {
            // console.error('Failed to sync cart with server:', error.response?.data || error.message);

            toast.error(error.response.data.message || error.message || 'server error', {
                position: "bottom-right",
                duration: 5000,
                iconTheme: { primary: "#ff0000", secondary: "#fff" },
                icon: "⚠️",
                style: { borderRadius: "10px", background: "#C0562F", color: "#fff" },
              });
        })
        .finally(() => {
            dispatch(setIsProcessing(false)); 

          });

        // console.log("remove :", item)
    }, 600)

    // add vila to session
    const handleAddVila =  debounce( async () => {
        

        
        dispatch(setIsProcessing(true));
        dispatch(setAddVila(item));

        http.post(`/session/add-to-cart`,
            { 
                roomId: item,
                quantity: 1,
                price: 200
            },
            { headers: { 'Content-Type': 'application/json' } }
        )
        .then(response => {
            console.log('Cart added to server successfully:', response.data);
            
            toast.success(`Add ${name}`, {
                position: "bottom-right",
                duration: 1000,
                iconTheme: { primary: "#C0562F", secondary: "#fff" },
                icon: "🛒",
                style: { borderRadius: "10px", background: "#C0562F", color: "#fff" },
              });

        })
        .catch(error => {
            toast.error(error.response.data.message || error.message || 'server error', {
                position: "bottom-right",
                duration: 5000,
                iconTheme: { primary: "#ff0000", secondary: "#fff" },
                icon: "⚠️",
                style: { borderRadius: "10px", background: "#C0562F", color: "#fff" },
              });
        })
        .finally(() => {
            dispatch(setIsProcessing(false)); 


        });
    }, 700);
    

    return (

    <div className='w-full select-none'>
 
                    <div className={` ${active  ? 'hidden':'w-full text-[16px] hp-xl:text-md flex justify-end p-1 hp-lg:p-4' } `}>
                        <button onClick={()=> { handleAddChart (item)}} className='px-4 hp-xl:px-6 py-1 bg-color1 text-white font-semibold'>
                        <h1>Select</h1>
                        </button>
                    </div>
                        
                    <div className={` ${active ? 'w-full mx-auto flex justify-center items-end flex-col' : 'hidden'} `}>
                        <div className="relative flex items-center justify-center p-4 gap-5">
                            <button 
                                onClick={handleRemoveVila} 
                                className="w-full h-[2rem] max-w-[2rem] p-2 flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                type="button"
                                id="decrement-button"
                                data-input-counter-decrement="counter-input"
                  
                            >
                                <svg className="w-full h-full max-w-[1.5rem] max-h-[1.5rem] text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                </svg>
                            </button>

                            <h1>{pty}</h1>

                            <button 
                                onClick={handleAddVila} 
                                className={` ${alert  ? "cursor-not-allowed w-full h-[2rem] max-w-[2rem] p-2 flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none " : " w-full h-[2rem] max-w-[2rem] p-2 flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none" }`}
                                type="button"
                                id="increment-button"
                                data-input-counter-increment="counter-input"
                                disabled={alert} // Disable tombol jika alert bernilai true
                            >
                                <svg className="w-full h-full max-w-[1.5rem] max-h-[1.5rem] text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </button>

                            <span className={` ${alert ? 'text-sm absolute -bottom-2 text-red-500' : 'hidden'}`}>
                                <h1>Max Room</h1>
                            </span>
                        </div>
                    </div>


                </div>

  )
}

export default SelectButton