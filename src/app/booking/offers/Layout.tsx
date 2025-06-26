
"use client"

import React, { Suspense, useEffect, useState } from 'react'
import Image from 'next/image'
import { IoMdArrowDropdown, IoPeople, FaRegCalendarAlt, gift, discount,GrNext } from '@/style/icons';
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Bucket from '../component/Bucket/bucket';
import { formatCheckInCheckOut, night } from '../component/constant/formatDate';
import ButtonUpdate from '../component/Update/buttonUpdate';
import CalendarMini from '../component/Calender/calendarMini';
import ModalPeople from '../component/Update/modalPeople';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/hooks';
import toast from 'react-hot-toast';
import { DeletedSession, DeletedCartInSession } from '../utils/ManageSession';
import { http, UrlMain } from '@/utils/http';
import BucketMini from '../component/Bucket/bucketMini';
import OffersItem from '../component/Offers/offersItem';
import { formatBookingDate, formatLocalISOIn, formatLocalISOOut } from '../component/constant';
import DatePickerUpdate from '../component/Calender/datePickerUpdate';
import { clearChart } from '@/lib/slice/bookingSlice';
import NoPayment from '@/component/PopUpNotifications/PaymentMaintenance';
import Whatsapp from '@/utils/whatsapp/indext';


const images = [
    "/assets/ImageOffers/01.jpg",
    "/assets/ImageOffers/02.jpg",
    "/assets/ImageOffers/03.jpg",
    "/assets/ImageOffers/04.jpg",
  ];

const Layout = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const dispatch = useAppDispatch();
    const pathname = usePathname();
    const [shouldReload, setShouldReload] = useState(false);
    // Ambil parameter checkin dan checkout
    const [activeBucket, setActiveBucket] = useState (false) 
    
    const [validate, setValidate] = useState (true) 
    const checkin = searchParams.get("checkin");
    const checkout = searchParams.get("checkout");
    const people: string | null = searchParams.get("people");
    
    const [safecheckin, setSafecheckIn] = useState<Date | null>(
        checkin ? new Date(checkin) : null
        );

    const [safecheckout, setSafecheckOut] = useState<Date | null>(
      checkout ? new Date(checkout) : null
    );
    
    const [maxPeople, setMaxPeople] = useState<number>(() => {
      const initialPeople = Number(people);
      if (initialPeople <= 4 && initialPeople >= 0) {
        return initialPeople;
      } else if (initialPeople < 0) {
        return 2;
      }
      return 4;
    });

    const [noPayment, setNoPayment] = useState<boolean>(false);


    useEffect(() => {
      
      if (!checkin || !checkout) {
        router.push('/booking'); 
      }
    }, [checkin, checkout, router]);

    
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
    
    
    if (safecheckin && safecheckout && validate) { 
      console.log("date range1 :", formatBookingDate(safecheckin, "checkIn"), formatBookingDate(safecheckout,"checkOut"))
    }


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
    
    
    const handleCloseNoPayment = () => {
      setNoPayment(false);
    };
    
      const handleOpenNoPayment = () => {
        setNoPayment(true);
    };

    // function Modal calendar mini
    const [isModalOpen, setModalOpen] = useState(false);
    const closeModal = () => setModalOpen(false);
    const openModal = () => setModalOpen(true);
  
    // 
    const [isModalOpenPeople, setModalOpenPeople] = useState(false);
    const closeModalPeople = () => setModalOpenPeople(false);
    const openModalPeople = () => setModalOpenPeople(true);
  
  
  
      useEffect(() => {
          if (checkin) {
            setSafecheckIn(new Date(checkin)); // Konversi ke objek Date
          }
          if (checkout) {
            setSafecheckOut(new Date(checkout)); // Konversi ke objek Date
          }
      }, [checkin, checkout]);
  
        
  
      // useEffect(() => {
  
      //   if (checkin && checkout) {
      //     // const formattedDates = formatCheckInCheckOut(safecheckin, safecheckout);
      //     console.log('hasil sementara',checkin);
      //   }
  
      // }, [checkin, checkout]);
  

      // Jika halaman di reload atau di keluarin  akan menghapus segalanya
      useEffect(() => {
          const handleUnload = () => {
              // Kirim data ke server menggunakan navigator.sendBeacon
              const url = `${UrlMain}/session/remove-cart-in-session`;
              navigator.sendBeacon(url);

              // Hapus localStorage
              localStorage.removeItem('cart_vila');
              localStorage.removeItem('Params');
              localStorage.removeItem('Night');
          };

          window.addEventListener("unload", handleUnload);

          return () => {
              window.removeEventListener("unload", handleUnload);
          };
      }, []);

    
      
  
  
  
    return (

        <div className=' flex-center flex-col py-[5rem] hp-landscape:py-[8rem] relative '>
            
            {/* IMAGE VIEW */}
            <figure className='flex flex-col hp-landscape:flex-row justify-center items-center hp-landscape:p-5 w-full  max-h-[30rem] overflow-hidden'>
                
                <div className='w-full hp-landscape:w-1/2 h-full max-h-[25rem] p-3'>
                      <Image alt='image1ffers' src={'/assets/ImageOffers/05.jpg'} width={600} height={400} className='w-full max-h-[23.5rem] object-cover  rounded-xl'/>
                </div>
  
  
                <div className='w-full hp-landscape:w-1/2 h-full'>
                      <div className='grid grid-cols-4 hp-landscape:grid-cols-2 gap-2 hp-landscape:gap-5 place-content-center p-2 h-full'>
  
                        { images.map((item, index) => (
  
                          <article key={index}  className='w-full h-full max-w-[25rem] hp-landscape:max-h-[11rem] '>
  
                            <Image  alt={`ImageOffera ${index+1}`} src={item} width={400} height={400} className='w-full h-full object-cover rounded-xl'/>
  
                          </article>
                        ))}
  
                      </div>
                </div>
  
            </figure>
  
            <NoPayment isOpen={noPayment} closeModal={handleCloseNoPayment}/>

            <Whatsapp/>
            
            {/* # Update Header  */}

            {/* Button Update */}
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
  
              {/* <CalendarMini 
                checkIn={safecheckin || null } 
                checkOut={safecheckout || null} 
                isOpen={isModalOpen} 
                closeModal={closeModal}
                // changeIn={Date}
                // changeOut={Date}
              />   */}

              <DatePickerUpdate 
                checkIn={safecheckin || null } 
                checkOut={safecheckout || null} 
                isOpen={isModalOpen} 
                closeModal={closeModal}
                // changeIn={Date}
                // changeOut={Date}
              />       
            
            </div>
  
  
            <ModalPeople 
              isOpen={isModalOpenPeople} 
              closeModal={closeModalPeople} 
              peopleMax={maxPeople || 0} 
              setPeoples={setMaxPeople}
            />        

             {/* # Update Header  */}
  


  
  
            {/* Product Vilas */}
            <section className='flex justify-between w-full relative'>
  
              <div className='w-full'>
  
                <OffersItem /> 
  
              </div>
  
              <div className='hidden w-full max-w-[30rem] xl2:block'>
  
                <Bucket checkin={safecheckin || null } checkout={safecheckout || null} openWarning={handleOpenNoPayment}/>
  
              </div>

              <div className={`${activeBucket ? 'block w-full xl2:hidden fixed bottom-0 bg-white':'hidden'} z-30`}>
  
                <BucketMini checkin={safecheckin || null } checkout={safecheckout || null} activeBucket={setActiveBucket} openWarning={handleOpenNoPayment}/>
  
              </div>
  
            </section>
                      
            
  
        </div>

    )
}

export default Layout