"use client";
import { useEffect, useState } from "react";
import { DayPicker, DateRange, getDefaultClassNames  } from "react-day-picker";
import "react-day-picker/style.css";
import { format } from "date-fns";
import { useAppDispatch } from "@/lib/hooks/hooks";
import { setCheckIn, setCheckOut } from "@/lib/slice/bookingSlice";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { formatBookingDate, formatLocalISOIn, formatLocalISOOut } from "../constant";


const DatePicker = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();
  const [ load , setLoad] = useState(false);
  
  const checkInDate = (selectedRange?.from);
  const checkOutDate = selectedRange?.to;
  const defaultClassNames = getDefaultClassNames();

  const today = new Date();
  today.setHours(0, 0, 0, 0);


    // Fungsi untuk memformat tanggal menjadi format ISO
    const formatDate = (date: Date) => {
      return date.toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    };


  
  useEffect(() => {
    if (checkInDate) {
      const formattedCheckIn = formatDate(checkInDate); 
      dispatch(setCheckIn(formattedCheckIn));
      // console.log("CheckIn redux:", formattedCheckIn);
    }
    if (checkOutDate) {
      const formattedCheckOut = formatDate(checkOutDate); 
      dispatch(setCheckOut(formattedCheckOut));
      // console.log("CheckOut redux:", formattedCheckOut);
    }
  }, [checkInDate, checkOutDate, dispatch]);
  
  const handleSetDate = () => {

    setLoad(true);

    if (!checkInDate || !checkOutDate) {
      // Validasi jika salah satu tanggal belum diisi
      toast.error("Enter the booking date.", {
        position: "bottom-right",
        duration: 5000,
        iconTheme: { primary: "#604beb", secondary: "#fff" },
        icon: "🗓",
        style: { borderRadius: "10px", background: "#C0562F", color: "#fff" },
      });
      setLoad(false);
      return;
    }
  
    if (checkInDate.getTime() === checkOutDate.getTime()) {
      // Validasi jika tanggal Check-In sama dengan Check-Out
      toast.error("Dates cannot be the same.", {
        position: "bottom-right",
        duration: 5000,
        iconTheme: { primary: "#ff0000", secondary: "#fff" },
        icon: "⚠️",
        style: { borderRadius: "10px", background: "#C0562F", color: "#fff" },
      });
      setLoad(false);
      return;
    }
  
    if (checkOutDate < checkInDate) {
      // Validasi jika tanggal Check-Out lebih kecil dari Check-In
      toast.error("Incorrect Check-Out Date.", {
        position: "bottom-right",
        duration: 5000,
        iconTheme: { primary: "#ff0000", secondary: "#fff" },
        icon: "⚠️",
        style: { borderRadius: "10px", background: "#C0562F", color: "#fff" },
      });
      setLoad(false);
      return;
    }
  
	    // Jika semua validasi lolos
      
      // router.push(
      //   `/booking/offers?checkin=${formatLocalISOIn(checkInDate)}&checkout=${formatLocalISOOut(checkOutDate)}&people=4`
      // );

      router.push(
        `/booking/offers?checkin=${formatBookingDate(checkInDate, "checkIn")}&checkout=${formatBookingDate(checkOutDate, "checkOut")}&people=4`
      );
    
  };
  



  return (
    <div className="overflow-hidden">
      <div className="relative flex flex-col justify-center items-center h-full  tablet-xxl:h-screen  w-full pt-[6rem] tablet-xxl:pt-[2rem]">
        
        <h2 className="h-[8rem] max-h-[2rem] sm:max-h-[6rem] w-full text-center text-lg hp-landscape:text-2xl font-semibold sm:mb-6 text-gray-700 flex-center">
          Book Your Stay
        </h2>


        <div className="flex-center w-full h-full full tablet-xxl:max-h-[23rem] p-2 rounded-lg  overflow-hidden">

          <div className="flex flex-col  w-full tablet-xxl:flex-row gap-2 sm:gap-7 tablet-xxl:gap-0 px-2">


            {/* Untuk Ukuran Layar Kecil */}
            {/* Tampilkan Check-In dan Check-Out */}
            <div className="tablet-xxl:hidden w-full justify-center items-center gap-4 flex-col  ">
              
              <div className="w-full h-full flex-center ">

                {/* Check-In */}
                <div className="w-full h-full max-w-[15rem] hp-landscape:max-w-[20rem] max-h-[20rem] flex-col border-black border-2 ">
                  <div className="w-full h-full bg-color2 max-h-[2rem] flex-center text-white">
                    <h1 className="text-md md:text-xl">Check-In</h1>
                  </div>
                  <div className="w-full flex-center h-full max-h-[10rem]">
                      
                    <div className="text-md md:text-2xl flex-center gap-2  tablet-xxl:flex-col p-4 tablet-xxl:p-2">
                      <div> {checkInDate ? format(checkInDate, "dd ") : ""} </div>
                      <div> {checkInDate ? format(checkInDate, "MMM ") : ""} </div>
                    </div>

                  </div>
                </div>

                {/* Check-Out */}
                <div className="w-full h-full max-w-[15rem] hp-landscape:max-w-[20rem] max-h-[20rem] flex-col border-black border-2">
                  <div className="w-full h-full bg-color2 max-h-[2rem] flex-center text-white ">
                    <h1 className="text-md md:text-xl">Check-Out</h1>
                  </div>
                  <div className="w-full flex-center h-full max-h-[10rem]">
                    <div className="text-md md:text-2xl flex-center gap-2 tablet-xxl:flex-col p-4 tablet-xxl:p-2">
                      <div> {checkOutDate ? format(checkOutDate, "dd ") : ""} </div>
                      <div> {checkOutDate ? format(checkOutDate, "MMM ") : ""} </div>
                    </div>
                  </div>
                </div>

              </div>


        
            
            </div>



            {/* Komponen DayPicker */}
            <div className="w-full flex justify-center tablet-xxl:justify-end my-6 sm:my-2 ">
              {/* <label className="mb-2 text-gray-600 font-medium">Select Your Dates</label> */}

                <DayPicker
                    mode="range"
                    numberOfMonths={2}
                    selected={selectedRange}
                    onSelect={setSelectedRange}
                    disabled={{ before: today }} 
                    className="hidden hp-landscape:block"
                    classNames={{
                        day: `font-bold text-black hover:bg-gray-200 font-semibold rounded-md`, // Setiap hari
                        selected: `bg-green-500 text-color1 font-semibold rounded-full`, // Hari yang dipilih
                        today: `text-[#FF5E00] font-bold border border-orange-500  rounded-md`, // Hari ini
                        month: `p-4`,
                    }}
                    style={{
                        '--rdp-range_start-date-background-color': '#FF3C00FF',
                        '--rdp-range_end-date-background-color': '#FF3C00FF',
                        '--rdp-accent-color': '#FF3C00FF',
                        '--rdp-range_middle-background-color': '#FCCDC6FF',
                        '--rdp-nav_button-disabled-opacity':'',
                        fontSize: '1.1rem',
                    } as React.CSSProperties}
                />

                <DayPicker
                    mode="range"
                    numberOfMonths={1}
                    selected={selectedRange}
                    onSelect={setSelectedRange}
                    disabled={{ before: today }} 
                    className="block hp-landscape:hidden"
                    classNames={{
                        day: `font-bold text-black hover:bg-gray-200 font-semibold rounded-md`, // Setiap hari
                        selected: `bg-green-500 text-color1 font-semibold rounded-full`, // Hari yang dipilih
                        today: `text-[#FF5E00] font-bold border border-orange-500  rounded-md`, // Hari ini
                        month: `p-2`,
                    }}
                    style={{
                        '--rdp-range_start-date-background-color': '#FF3C00FF',
                        '--rdp-range_end-date-background-color': '#FF3C00FF',
                        '--rdp-accent-color': '#FF3C00FF',
                        '--rdp-range_middle-background-color': '#FCCDC6FF',
                        '--rdp-nav_button-disabled-opacity':'',
                        fontSize: '1rem',
                    } as React.CSSProperties}
                />


            </div>


            {/* Untuk Ukuran Layar Besar */}
            {/* Tampilkan Check-In dan Check-Out */}
            <div className="flex w-full justify-center items-center gap-4 flex-col  ">
              
              <div className=" hidden tablet-xxl:flex justify-center items-center  w-full h-full ">

                {/* Check-In */}
                <div className="w-full h-full max-w-[20rem] max-h-[20rem] flex-col border-black border-2 p-2">
                  <div className="w-full h-full bg-color2 max-h-[2rem] flex-center text-white">
                    <h1 className="text-md md:text-xl">Check-In</h1>
                  </div>
                  <div className="w-full flex-center h-full max-h-[13rem]">
                      
                    <div className="text-md md:text-2xl flex-center gap-2  tablet-xxl:flex-col p-4 tablet-xxl:p-2">
                      <div> {checkInDate ? format(checkInDate, "dd ") : ""} </div>
                      <div> {checkInDate ? format(checkInDate, "MMM ") : ""} </div>
                    </div>

                  </div>
                </div>

                {/* Check-Out */}
                <div className="w-full h-full max-w-[20rem] max-h-[20rem] flex-col border-black border-2 p-2">
                  <div className="w-full h-full bg-color2 max-h-[2rem] flex-center text-white">
                    <h1 className="text-md md:text-xl">Check-Out</h1>
                  </div>
                  <div className="w-full flex-center h-full max-h-[13rem]">
                    <div className="text-md md:text-2xl flex-center gap-2 tablet-xxl:flex-col p-4 tablet-xxl:p-2">
                      <div> {checkOutDate ? format(checkOutDate, "dd ") : ""} </div>
                      <div> {checkOutDate ? format(checkOutDate, "MMM ") : ""} </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="w-full flex justify-center items-center sm:p-5 mb-5 sm:mb-1 ">
                <button
                  className="p-2 border-color2 border-2 w-full max-w-[30rem] tablet-xxl:max-w-[40rem]"
                  onClick={() => {
    
                  handleSetDate()}
                }
                >
                  { load ? (

                    <div role="status">
                        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>

                  ) : (

                    <h1>CHECK RATES</h1>
                    
                  )}

                </button>
              </div>
        
            
            </div>

          </div>
        </div>


      </div>
    </div>
  );
};

export default DatePicker;
