"use client"

import { ReservationModel } from '@/models/bookingModels';
import { http } from '@/utils/http';
import Image from 'next/image';
import React, { useEffect, useState, useRef  } from 'react'
import {  useAppSelector , useAppDispatch} from "@/lib/hooks/hooks";
import { setGetChart } from '@/lib/slice/bookingSlice';
import { convertToRupiah } from '@/constants';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';
import { handleMe } from '@/utils/me/getMe';
import MainLoading from '@/component/mainLoading/loading';
import { shopBag } from '@/style/icons';
import { authCheckout, authLogin, checkUser } from '@/app/auth/authCeckout/authCheckout';
import useSnap from '../../hooks/useSnap';
import { formatCheckInCheckOut, night } from '@/app/booking/component/constant/formatDate';
import { MeData } from '@/utils/me/getData';
import MiniCheckoutBottom from '../MiniCheckoutBottom/MiniCheckoutBottom';
import accessTokens from '@/utils/accesToken';

interface Params {
    checkin? :  Date | null;
    checkout? : Date | null;
  }
interface LayoutProps {

    onBack: () => void;
    // {onBack}: LayoutProps
}

const AuthCheckout = (  ) => {
    
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { snapEmbed } = useSnap()
  const chart = useAppSelector((state) => state.booking.stateChartRes);
  const [ nights, setNight ] = useState<number | 0>();
  const [ subtotal, setSubtotal ] = useState<number | 0>();
  const [ dateParams, setDate  ] = useState<Params>();
  const [ checkin, setCheckin  ] = useState< Date | null>();
  const [ checkout, setcheckout  ] = useState< Date | null>();
  const [ priceTotal, setPriceTotal] = useState<number | 0>();
  const [ snapShow, setSnapShow] = useState(false)
  const [ load, setLoad] = useState(false)
  const [ animate, setAnimate] = useState(false)
  const [ amountNight, setAmountNight] = useState<number | 0>();

  const isInitialRender = useRef(true); 

  useEffect(()=> {

      dispatch(setGetChart()) 
      

      const datePar  = JSON.parse(localStorage.getItem('Params') ?? '[]') || [];
      const AmountNights  = JSON.parse(localStorage.getItem('Night') ?? '[]') || [];

      setDate(datePar )
      setAmountNight(AmountNights)
      setFormData((prev) => ({ ...prev, night: AmountNights }));

  },[dispatch])


  const handleAnimateButton = () => {
    setAnimate(true);
  }


    useEffect(() => {

       const DataMe = async() => {

       const data = await MeData()

        if( data ){
          console.log(data);
          setFormData((prev) => ({ ...prev, name: data.name }));
          setFormData((prev) => ({ ...prev, email: data.email }));
          setFormData((prev) => ({ ...prev, phone: data.phone }));
        }
      }

      DataMe()

    },[])


     // Kirimkan Harga Total
     useEffect(() => {
      const handleRedirectOrFetch = async () => {
        
  
        if (!snapShow && chart) {

          setLoad(true);

          try {
            const response = await http.get('/session/get-total-price', {
              headers: { 'Content-Type': 'application/json' },

            });
            console.log('Price total successfully:', response.data);
  
    
            setTimeout(() => {
              setLoad(false);
            }, 2000);

            setFormData((prev) => ({
              ...prev,
              grossAmount: response.data.totalPrice,
              room: response.data.data,
            }));

  

          } catch (error: any) {

            const mail = error.response?.data?.message || 'server does not respond';
            console.error('Failed to fetch price total:', error.response?.data || error.message);
  
            // Tampilkan toast error
            toast.error(mail, { position: 'bottom-right', duration: 5000 });
    
              const auth = await handleMe()
              console.log('hasil debuging me:', auth)
              if( auth === false ){

                  setTimeout(() => {
                    router.push('/booking');
                  }, 2000);
              }
                else {

                router.push('/auth/member');
            }
            setLoad(false);
          }
        }
      };
  
      handleRedirectOrFetch();

    }, [snapShow, chart, router]); 

    const [formData, setFormData] = useState<ReservationModel>({

        bookingId: '',
        title:'',
        name:'',
        email:'',
        phone: '',
        status: '',
        userId: '',
        checkIn: '',
        checkOut: '',
        night:0,
        grossAmount: 0,
        paymentUrl: '',
        room:[]

      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
      };
    
      // Mengirim Data Supaya Dibooking
      const handleSubmit = async () => {
        try {
          // Validasi awal
          if (!formData.name || !formData.email || !formData.phone) {
            toast.error("Semua field wajib diisi!", { position: "bottom-right", duration: 5000 });
            return;
          }
      
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(formData.email)) {
            toast.error("Format email tidak valid!", { position: "bottom-right", duration: 5000 });
            return;
          }
      
          // Set loading sebelum memulai proses
          setLoad(true);
      
          // Proses auth sebelum booking berhasil
          const userExists = await checkUser(formData.email);
          if (userExists) {
            await authLogin({ email: formData.email });
          } else {
            await authCheckout({
              title: formData.title,
              name: formData.name,
              phone: formData.phone,
              email: formData.email,
            });
      
            await authLogin({ email: formData.email });
          }
      
          // Proses booking
          const response = await accessTokens.post('/booking/addBooking', { ...formData });
      
          if (response) {
            const responseData = response.data;
            const responseServer = responseData.data;
      
            toast.success(responseData.message || "Booking berhasil!", { position: "bottom-left", duration: 5000 });
      
            setSnapShow(true);
            snapEmbed(responseServer.snap_token, "snap-container", {
              onSuccess: function (result: any) {
                console.log("Payment Success:", result);
                router.replace(`/order-status?order_id=${responseServer.id}`);
                setSnapShow(false);
              },
              onPending: function (result: any) {
                console.log("Payment Pending:", result);
                router.replace(`/order-status?order_id=${responseServer.id}`);
                setSnapShow(false);
              },
              onClose: function () {
                console.log("Payment Closed");
                setSnapShow(false);
              },
            });
      
            // Bersihkan cart_vila di localStorage
            localStorage.removeItem("cart_vila");
            localStorage.removeItem("Params");
            localStorage.removeItem("Night");
            // await DeletedCart();
          } else {
            const errorMessage = "Gagal melakukan booking.";
            throw new Error(errorMessage);
          }
        } catch (error: any) {
          console.error("Error during handleSubmit:", error.message);
      
          // Tangkap error dari API, jika tersedia
          const errorMessage =
            error.response?.data?.message || // Pesan error dari response
            error.message || // Pesan error dari catch
            "Terjadi kesalahan, silakan coba lagi."; // Default pesan error
      
          toast.error(errorMessage, { position: "bottom-right", duration: 5000 });
        } finally {
          setTimeout(() => {
            setLoad(false);
          }, 2000);
        }
      };
      
    
      

    // Kirimkan Tanggal CheckIn dan CheckOut
    useEffect(() => {
        if (dateParams) {
          // Setel checkin dan checkout ke state
          setCheckin(dateParams.checkin ? new Date(dateParams.checkin) : null);
          setcheckout(dateParams.checkout ? new Date(dateParams.checkout) : null);


          setFormData((prev) => ({ ...prev, checkIn: dateParams.checkin || '', checkOut: dateParams.checkout || '' })); 

        }
      }, [dateParams]);
      


      useEffect(() => {
        // Hitung durasi malam hanya jika checkin dan checkout valid
        if (checkin && checkout) {

          const checkInDate = new Date(checkin);
          const checkOutDate = new Date(checkout);

          checkInDate.setHours(0, 0, 0, 0);
          checkOutDate.setHours(0, 0, 0, 0);

          const nightDuration = Math.max(
              0,
              (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)
          );

      
          setNight(nightDuration);
      
        //   console.log("Checkin:", checkin);
        //   console.log("Checkout:", checkout);
        //   console.log("Night Duration:", nightDuration);
        }
      }, [checkin, checkout]);
      



      useEffect(() => {


        if(chart && amountNight){
            

            const totalPrice = chart.reduce((total, item) => {
                return total + item?.data[0]?.priceDateList * item.quantity;
            }, 0);

            setSubtotal(totalPrice)
        }

      },[chart, amountNight])


  


  return (
    
    // onBack={() => router.push('/')} full={snapShow} noHeader={snapShow}


    <div title='Checkout '>
        
        { load && (<MainLoading/>)}

        {!snapShow && (
            <>

                <form  onSubmit={(e) => { e.preventDefault();  handleSubmit();  }} className='flex-center flex-col pt-[4rem] hp-landscape:py-[9rem] relative gap-2 overflow-hidden p-3   '>
                    
                    <div className='flex-center w-full h-full max-w-[70rem] gap-5  '>


                        <div className='flex-center flex-col w-full  '>

                                <div className='w-full px-4 sm:px-8 shadow-md my-5 mt-10 h-full max-h-[20rem]'>

                                  <ul className='flex flex-col gap-2 w-full mb-2'>
                                      <h1 className=' text-center sm:text-xl font-bold mb-4'> Guest Information</h1>
                                    <li className='uppercase text-[14px] sm:text-[17px] font-bold text-color1'>
                                      <h1> {formData.name}</h1>
                                    </li>
                                    <li className='text-[15px] sm:text-[17px] font- text-slate-600'>
                                      <h1>{formData.email}</h1>
                                    </li>
                                    <li className='text-[15px] sm:text-[17px] font- text-slate-500'>
                                      <h1>+62-{formData.phone}</h1>
                                    </li>
                                  </ul>

                                </div>

                                <div className='bg-color4 p-4 sm:px-8 sm:py-5 w-full space-y-2'>

                                    <h1 className='text-[18px] sm:text-[22px] md:text-xl mb-8 text-black font-bold'>
                                        Your Resevation
                                    </h1>

                                    <h1 className='text-[13px] sm:text-[16px] text-color1'>
                                    {checkin && checkout
                                    ? formatCheckInCheckOut(checkin ,checkout , false, night) 
                                    : "Select check-in and check-out dates"}
                                    </h1>

                                    {chart && chart.length > 0 ? (

                                        chart.map(( item , index) => (

                                        <div key={index} className='flex justify-between items-center w-full gap-5'>

                                          <div className='flex gap-2 sm:gap-4 w-full'>
                                              <h1 className='text-[12px] font-bold hp-lg:text-[13px] sm:text-[18px] sm:font-semibold min-w-[6rem]'>  {item.data[0]?.nameAdditional || "No Name"} </h1>
                                                                                        
                                              <div className='flex-center gap-1 font-semibold text-[10px] sm:text-[14px] text-slate-600'>
                                                  <div className='flex gap-1'>
                                                      <h1>
                                                          {item.quantity} 
                                                      </h1>
                                                      <p className='hidden sm:block' >Rooms</p>
                                                  </div>
                                                  <h1>
                                                      X
                                                  </h1>
                                                  <div>
                                                      { nights && nights > 0 ? (

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
                                          </div>

                                            <div className='flex gap-2 text-[15px] sm:text-[17px] font-semibold'>
                                                <h1>IDR</h1>
                                                { nights && nights && (

                                                // <h1>{convertToRupiah(item.data[0]?.price * nights) || "No price"}</h1>
                                                <h1>{convertToRupiah(item.data[0]?.priceDateList * item.quantity) || "No price"}</h1>

                                                )}
                                            </div>

                                        </div>


                                            
                                            ))

                                        ) : (

                                        <p>Data tidak ditemukan</p>

                                    )}

                                    <div className='text-[14px] sm:text-[20px] flex justify-between items-center'>
                                        <h1 className='text-[13px] font-bold sm:text-[18px] sm:font-semibold'>Reservation Subtotal</h1>
                                        <h1 className='flex gap-2 text-[15px] sm:text-[17px] font-semibold'>{convertToRupiah(subtotal && subtotal ? subtotal : 0)}</h1>
                                    </div>
                                    <div className='text-[14px] sm:text-[20px] flex justify-between items-center'>

                                    </div>

                                </div>

                                <div className='p-4 w-full  flex-center bg-color2'>

                                    <div className='flex justify-between items-center w-full text-yellow-400 font-semibold'>
                                        <h1>Reservation Total</h1>
                                        <h1 className='text-md md:text-lg'>IDR {convertToRupiah((subtotal ) && subtotal ? subtotal : 0)}</h1>
                                    </div>

                                </div>
                        </div>

                    </div>

                    <hr className=" hidden xl:block top-0 left-0 z-30 h-0 w-full max-w-[74rem] border-b border-solid border-color1 mt-5"/>

                    {/* CheckOut            */}
                    <div className='hidden sm:flex justify-end items-center w-full h-full max-w-[70rem] p-2 mt-5'>

                        <button type="submit" className='px-3 py-2 bg-color1 text-white flex-center gap-2'>
                            
                            <h1> Checkout </h1>

                            <Image
                                src={shopBag}
                                alt='image appointment'
                                width={200}
                                height={200}
                                className="w-[1.6rem] h-[1.6rem]  hp-lg:w-[1.8rem] hp-lg:h-[1.8rem] max-w-[2rem] max-h-[2rem] object-cover "
                            />
                        </button>

                    </div>
                                
                    {/* <MiniCheckoutBottom animate={animate} handleAnimateButton={handleAnimateButton}/> */}
                    
                    <div className=' sm:hidden text-white w-full flex justify-center items-center mt-3 '>
                          <button type="submit" className='w-full flex-center gap-2 px-2.5 py-2 max-w-[8rem] bg-color1 rounded-md'>
                            <h1>Checkout</h1>
                            <Image
                            src={shopBag}
                            alt="image appointment"
                            width={200}
                            height={200}
                            className={`w-[1.6rem] h-[1.6rem] hp-lg:w-[1.8rem] hp-lg:h-[1.8rem] max-w-[2rem] max-h-[2rem] object-cover  `}
                            />
                          </button>
                    </div>    

                </form>
            
            </>
        )}

        <div id="snap-container" className={` ${snapShow ? "w-full h-auto pt-[5rem] sm:pt-[7rem] mx-auto p-2":"w-full h-auto mx-auto p-4"} `} >


        </div>


    </div>

  )
}

export default AuthCheckout