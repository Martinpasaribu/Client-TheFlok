import React from 'react'
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { formatBookingDate, formatLocalISOIn, formatLocalISOOut } from '../component/constant';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/hooks';
import { clearChart } from '@/lib/slice/bookingSlice';

import ButtonUpdate from '../component/Update/buttonUpdate'
import DatePickerUpdate from '../component/Calender/datePickerUpdate';
import ModalPeople from '../component/Update/modalPeople';
import toast from 'react-hot-toast';
import { DeletedCartInSession } from '../utils/ManageSession';

const SetBooking = () => {


    const router = useRouter();
    const searchParams = useSearchParams();
    const dispatch = useAppDispatch();
    const checkin = searchParams.get("checkin");
    const checkout = searchParams.get("checkout");
    const people: string | null = searchParams.get("people");
    const [validate, setValidate] = useState (true) 
    const [shouldReload, setShouldReload] = useState(false);
    
    const [safecheckin, setSafecheckIn] = useState<Date | null>(
        checkin ? new Date(checkin) : null
        );

    const [safecheckout, setSafecheckOut] = useState<Date | null>(
        checkout ? new Date(checkout) : null
    );

    // function Modal calendar mini
    const [isModalOpen, setModalOpen] = useState(false);
    const closeModal = () => setModalOpen(false);
    const openModal = () => setModalOpen(true);
    
    // function People add
    const [isModalOpenPeople, setModalOpenPeople] = useState(false);
    const closeModalPeople = () => setModalOpenPeople(false);
    const openModalPeople = () => setModalOpenPeople(true);
    

    const [maxPeople, setMaxPeople] = useState<number>(() => {
        const initialPeople = Number(people);
        if (initialPeople <= 4 && initialPeople >= 0) {
        return initialPeople;
        } else if (initialPeople < 0) {
        return 2;
        }
        return 4;
    });

    useEffect(() => {
        if (shouldReload) {
          // Cek apakah parameter sudah cocok sebelum reload
          if (searchParams.get("checkin") === formatLocalISOIn(safecheckin) &&
              searchParams.get("checkout") === formatLocalISOOut(safecheckout) &&
              searchParams.get("people") === "4") {
            window.location.reload();
          }
        }
      }, [shouldReload, searchParams, safecheckin, safecheckout]);
  
      
      useEffect(() => {
        // Validasi check-in tidak boleh >= check-out
        if (safecheckin && safecheckout && safecheckin >= safecheckout) {
          toast.error("Check-out  must be after check-in .",{ position: "bottom-right", duration: 5000 });
          setValidate(false); // Reset jika tidak valid
        } else {
          setValidate(true)
        }
    
        // Validasi check-out tidak boleh <= check-in
        if (safecheckout && safecheckin && safecheckout <= safecheckin) {
          toast.error("Check-In  must be before check-in .",{ position: "bottom-right", duration: 5000 });
          setValidate(false); // Reset jika tidak valid
        } else {
          setValidate(true)
        }
  
        // Validasi check-out tidak boleh === check-in
  
          const today1 = safecheckin ? new Date(safecheckin) : null;
          const today2 = safecheckout ? new Date(safecheckout) : null;
          
          today1?.setHours(0, 0, 0, 0);
          today2?.setHours(0, 0, 0, 0);
  
          // console.log("date range1 :", safecheckin, safecheckout)
          console.log("date range2 :", today1, today2)
  
          if (today1?.getTime() === today2?.getTime()) {
            toast.error("Dates cannot be the same.", { position: "bottom-right", duration: 5000 });
              console.log("date range3 :", today1?.getTime(), today2?.getTime())
              setValidate(false); 
          } else {
            setValidate(true);
          }
    
      }, [safecheckin, safecheckout]);
      

    const PushUpdate = () => {
        if (safecheckin && safecheckout && validate) { 
          
          dispatch(clearChart()); 
          DeletedCartInSession().catch((error) => console.error('Error during unload:', error));
          localStorage.removeItem('cart_vila');
          localStorage.removeItem('Params');
          localStorage.removeItem('Night');
          
          const newUrl =`/booking/offers?checkin=${formatBookingDate(safecheckin, "checkIn")}&checkout=${formatBookingDate(safecheckout,"checkOut")}&people=4`
          router.push(newUrl);
  
          setShouldReload(true);
          
  
          toast.success("Offer updated", {
            position: "bottom-left",
            duration: 6000,
          });
          
        } else {
          toast.error("Order date range is incorrect", {
            position: "bottom-right",
            duration: 5000,
          });
        }
      };

  return (

    <div className=''>

        <ButtonUpdate 
            checkin={safecheckin || null } 
            checkout={safecheckout || null } 
            OpenCalendarMini={openModal} 
            OpenModalPeople={openModalPeople} 
            peopleMax={maxPeople || 0}
            pushUpdate={PushUpdate}
            updateCheckIn={setSafecheckIn}
            updateCheckOut={setSafecheckOut}
        />

        {/* Edit Calendar */}
  
        <div className=''>

          <DatePickerUpdate 

              checkIn={safecheckin || null } 
              checkOut={safecheckout || null} 
              isOpen={isModalOpen} 
              closeModal={closeModal}
          />       

        </div>


          <ModalPeople 

              isOpen={isModalOpenPeople} 
              closeModal={closeModalPeople} 
              peopleMax={maxPeople || 0} 
              setPeoples={setMaxPeople}

          />    

    </div>
  )
}

export default SetBooking