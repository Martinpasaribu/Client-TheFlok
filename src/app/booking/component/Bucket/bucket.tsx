import { FaRegCalendarAlt, IoPeople, FaBasketShopping } from '@/style/icons';
import React, { useEffect, useState } from 'react'
import { formatCheckInCheckOut, night } from '../constant/formatDate';
import {  useAppSelector , useAppDispatch} from "@/lib/hooks/hooks";
import { setGetChart } from '@/lib/slice/bookingSlice';
import { RoomModels } from '@/models/roomModels';
import { BucketModels } from '../../models';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { DeletedSession } from '../../utils/ManageSession';
import toast from 'react-hot-toast';
import { http } from '@/utils/http';
import { AddNightToSession } from '../api/AddNightToSession';
import { convertToRupiah } from '@/constants';

interface BucketProps {
    checkin? :  Date | null;
    checkout? : Date | null;
    openWarning : () => void;
}

const Bucket = ( {checkin, checkout, openWarning} : BucketProps) => {

  const [ nights, setNight ] = useState<number | 0>();
  const [ priceTotal, setPriceTotal] = useState<number | 0>();
  
  const dispatch = useAppDispatch();
  const router = useRouter()
  
  //   const [chart, setChart] = useState<BucketModels[]>()
  
  const chart = useAppSelector((state) => state.booking.stateChartRes);
  const isProcessing = useAppSelector((state) => state.booking.isProcessing);

  useEffect(() => {

    if(checkin && checkout){

        const checkInDate = new Date(checkin);
        const checkOutDate = new Date(checkout);

        checkInDate.setHours(0, 0, 0, 0);
        checkOutDate.setHours(0, 0, 0, 0);

        const nightDuration = Math.max(
            0,
            (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)
        );

          setNight(nightDuration);
    }

  },[checkin , checkout])


  useEffect(()=> {

      dispatch(setGetChart())


  },[dispatch])

  


    //   useEffect(() => {

    //     if(chart.length > 0 && nights){

    //         const totalPrice = chart.reduce((total, item) => {
    //             return total + item?.data[0]?.price * item.quantity * nights;
    //         }, 0);
    //         setPriceTotal(totalPrice)
    //     } else {
    //         setPriceTotal(0)
    //     }

    //   },[chart, nights])

      // With Site Minder  
      useEffect(() => {

        if(chart.length > 0 && nights){

            const totalPrice = chart.reduce((total, item) => {
                return total + item?.data[0]?.priceDateList * item.quantity;
            }, 0);
            setPriceTotal(totalPrice)
        } else {
            setPriceTotal(0)
        }

      },[chart, nights])


      const handleSetParams = async () => {

        if (isProcessing) return;
    
        // Cek apakah localStorage berisi cart_villa
        const cartVilla = localStorage.getItem('cart_vila');

        if (!cartVilla || JSON.parse(cartVilla).length === 0) {
            // Tampilkan toast jika cart_villa belum diset
            toast.error("There is no room to choose yet.", {
                position: "bottom-right",
                duration: 5000,
                iconTheme: { primary: "#ff0000", secondary: "#fff" },
                icon: "⚠️",
                style: { borderRadius: "10px", background: "#C0562F", color: "#fff" },
              });
            return;
        }
    
        if (checkin && checkout) {
            
            const param = {
                checkin: checkin,
                checkout: checkout,
            };

            await AddNightToSession({ 
                checkIn: new Date(checkin), 
                checkOut: new Date(checkout) 
            });
            
            localStorage.setItem('Params', JSON.stringify(param));
            localStorage.setItem('Night', JSON.stringify(nights));
            router.push('/checkout');
        }
    };
    


  
  return (

    <div className='w-full mt-4 xl2:mt-10 sticky top-28 z-30 py-4'>
        

        
        <div className='flex flex-col h-full max-w-[70rem] mx-[.5rem]  tablet-lg:mx-[1.8rem] justify-around items-center text-xl gap-2 tablet-lg:gap-5 m-2 p-3 border-[1px] shadow-md rounded-xl'>
            
            <div className='text-xl font-semibold w-full  flex justify-around  text-center  py-1'> 
                <div className='max-w-[5rem] p-2  bg-color2 text-white rounded-md'>
                    <FaBasketShopping size={30}/>
                </div>
                <div className='w-full flex flex-row-reverse justify-start items-center gap-4'>

                    <FaRegCalendarAlt size={20} />

                    <h1 className='text-[16px]'>
                    {checkin && checkout

                    
                    ? formatCheckInCheckOut(checkin, checkout, false, night) 
                    : "Select check-in and check-out dates"}
                    </h1>


                    {/* <IoPeople size={20} /> */}
                </div>
            </div>


            {chart && chart.length > 0 ? (

                
             chart.map(( item , index) => (
               
                <div key={index} className='w-full'>
                  
                        <div className='w-full'>  

                            <h1 className='text-lg font-semibold text-left w-full'>  {item.data[0]?.nameAdditional || "No Name"} </h1>

                            <div className='flex justify-between items-center w-full gap-4'>

                                <div className='flex text-sm w-full gap-3 font-normal'>
                                    <h1>
                                        {item.quantity} Rooms
                                    </h1>
                                    <h1>
                                        X
                                    </h1>
                                    <div>
                                        { nights && nights > 1 ? (

                                            <h1> {nights} </h1>
                                            ) : (
                                            <h1> {nights} </h1>
                                            )

                                        }
                                    </div>

                                    <div>
                                        Nights
                                    </div>
                                    
                                </div>

                                <div className='flex gap-2 text-[17px] font-semibold'>
                                    <h1>IDR</h1>
                                    { nights && nights && ( 

                                        // <h1>{convertToRupiah(item.data[0]?.price * nights) || "No price"}</h1>
                                        <h1>{convertToRupiah(item.data[0]?.priceDateList * item.quantity) || "No price"}</h1>

                                    )}
                                </div>

                            </div>


                        </div>

                </div>
                ))

            ) : (
            
            <p>No choice items</p>

            )}

            <hr className=" top-0 left-0 z-40 h-0 w-full  border-b border-solid border-gray-300"/>
            


            <div className='flex justify-between items-center font-bold w-full'>
                <h1>Total</h1>
                <div className='flex gap-2 text-[20px] '>
                    <h1>IDR</h1>
                    {/* <h1>{ priceTotal && priceTotal ? priceTotal : 0  }</h1> */}
                    <h1>{convertToRupiah(priceTotal ?? 0)}</h1>

                </div>
            </div>

            <div className='flex gap-2 justify-between text-[15px] font-semibold items-center  w-full'>
                <button className='w-full border-[1px] border-color1 text-color1 rounded-md'>
                    <h1> Chart </h1>
                </button>
                
            
                <button
                    onClick={openWarning}
                    // onClick={handleSetParams}
                    className={`w-full rounded-md ${
                    isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-color1 text-white'
                    }`}
                    disabled={isProcessing}
                >
                    <h1> Book Now </h1>
                </button>
        

            </div>
    
        </div>

    </div>

  )
}

export default Bucket