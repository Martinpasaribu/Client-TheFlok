import { discount, FaRegCalendarAlt, gift, GrNext, IoMdArrowDropdown, IoPeople } from '@/style/icons'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { formatCheckInCheckOut, night } from '../constant/formatDate'
import { useAppSelector } from '@/lib/hooks/hooks';
import SkeletonItemDate from '../Skeleton/skeletonItemDate';
import Discount from '../Discount';

interface ButtonProps {

    checkin?: Date | null;
    checkout?: Date | null;
    peopleMax?: number;
    OpenCalendarMini: () => void;
    OpenModalPeople: () => void;
    pushUpdate:() => void;
    updateCheckIn:(checkIn: Date | null) => void;
    updateCheckOut:(checkOut: Date | null) => void;
  
}

const ButtonUpdate = ( { checkin, checkout, OpenCalendarMini, OpenModalPeople, pushUpdate, peopleMax,updateCheckIn, updateCheckOut} : ButtonProps ) => {
    
    
    const [checkIn, setCheckInDay] = useState<Date | null>(null);
    const [checkOut, setCheckOutDay] = useState<Date | null>(null);
  
    const dateIn = useAppSelector((state) => state.booking.stateCheckIn);
    const dateOut = useAppSelector((state) => state.booking.stateCheckOut);

    const [discounts, setDiscount] = useState<boolean>(false);

  // Sinkronisasi props ke local state
  useEffect(() => {
    if (checkin) {
      setCheckInDay(new Date(checkin));
    }
    if (checkout) {
      setCheckOutDay(new Date(checkout));
    }
  }, [checkin, checkout]);

  // Sinkronisasi Redux state ke local state
  useEffect(() => {
    if (dateIn) {
      setCheckInDay(new Date(dateIn));
      updateCheckIn(new Date(dateIn));
    }
    if (dateOut) {
      setCheckOutDay(new Date(dateOut));
      updateCheckOut(new Date(dateOut));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateIn, dateOut]);


  const handleCloseDiscount = () => {
    setDiscount(false);
  };

  const handleOpenDiscount = () => {
    setDiscount(true);
  };


    return (
    <section className='w-full flex-center flex-col gap-4 tablet-xl:gap-1 mt-4 px-[.8rem] xl:px-[1.5rem]'>
          
        <div className='flex h-full w-full justify-around bg-color1 items-center text-[10px] hp-landscape:text-[14px]  tablet-lg:text-[16px] gap-2 tablet-lg:gap-5 m-1 px-3 py-5 shadow-md rounded-xl'>


          { checkIn && checkOut  ? (

            // Date
            <div onClick={OpenCalendarMini} className='cursor-pointer flex-center gap-3'>
            
                <FaRegCalendarAlt size={25} />

                <h1>
                    {checkIn && checkOut
                    ?  formatCheckInCheckOut(checkIn, checkOut, true, night)

                    : "Select check-in and check-out dates"}
                </h1>

                <IoMdArrowDropdown size={25} className='hidden hp-landscape:flex'/>

            </div>

            ) :  (

              <div onClick={OpenCalendarMini} className='flex-center gap-3 cursor-pointer '>

                  <FaRegCalendarAlt size={25} />
                  
                  <h1 className='flex-center gap-2 text-slate-800 font-normal'> {peopleMax} <span className='hidden hp-landscape:flex'>Check in - Check out</span> </h1>
                  <IoMdArrowDropdown  size={25} className='hidden hp-landscape:flex'/>
              </div>

            )
          }
        
          <div className="w-[0.5px] h-[3rem] bg-color2">
          
          </div>

          {/* People */}
          <div onClick={OpenModalPeople} className='flex-center gap-3 cursor-pointer '>
              <IoPeople size={25} />
              <h1 className='flex-center gap-2 text-slate-800 font-normal'> {peopleMax} <span className='hidden hp-landscape:flex'>Adults</span> </h1>
              <IoMdArrowDropdown  size={25} className='hidden hp-landscape:flex'/>
          </div>

          <div className="w-[0.5px] h-[3rem] bg-color2">
          
          </div>

          {/* Update */}

          <button onClick={pushUpdate} className='px-5 py-2 bg-color2 text-white rounded-xl'>
              <h1>FIND ROOM</h1>
          </button>

        </div>
{/* 
        <div onClick={handleOpenDiscount} className=' cursor-pointer w-full border-[1px] shadow-md rounded-xl  hp-landscape:max-w-[25rem]  xl2:max-w-[30rem] flex justify-between hp-landscape:justify-center items-center gap-5  hp-landscape:p-2 tablet-xl:p-1 xl2:gap-5'>

          <div   className=' flex-center gap-2'>
              <div className='p-3 rounded-full '>
                  <Image src={gift} alt={'gift'} className='hidden hp-landscape:block w-5 h-5 tablet-lg:w-7 tablet-lg:h-7 object-contain'/>
                  <Image src={discount} alt={'discount'} className='block hp-landscape:hidden w-7 h-7 tablet-lg:w-8 tablet-lg:h-8 object-contain'/>
              </div>
              <div className='text-sm font-semibold hp-landscape:text-lg'>
              <h1>
                  Special Offers Available
              </h1>
              </div>
          </div>    

          <div>
              <GrNext size={20} />
          </div>
        </div> */}


        {/* Popup Discount */}
        <Discount isOpen={discounts} closeModal={handleCloseDiscount}/>

    </section>
  )
}

export default ButtonUpdate