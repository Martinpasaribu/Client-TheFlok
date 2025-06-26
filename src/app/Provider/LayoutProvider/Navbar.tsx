'use client'

import Link from "next/link"
import Image from "next/image"
import CustomButton from "@/component/buttons/CustomButton"
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";
import { MdDarkMode, MdLightMode } from "@/style/icons";
import Hamburger from "@/component/modal/Hamburger";
import { DeletedSession, DeletedCartInSession } from "@/app/booking/utils/ManageSession";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { http } from "@/utils/http";
import toast from "react-hot-toast";
import { UserModels } from "@/models/userModels";


const Navbar = () => {

  
  const [scrolled, setScrolled] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(0);
  const [dataMe, setDataMe] = useState<UserModels>();
  const [isNotFound, setIsNotFound] = useState(false);

  const router = useRouter(); 
  const pathname = usePathname();

  const isVilaPage = pathname.startsWith("/vila/") && pathname.split("/").length === 3;


  const UrlAlaric = "http://booking.adhisthanavillas.com/en/offers?hotel=ADVB";

  console.log("Current pathname:", pathname);

  const openModal = () => {
    setHamburger((prev) => !prev); // Gunakan callback untuk memastikan nilai sebelumnya digunakan
    setUpdateIndex(0)
    console.log("button in active:", !hamburger); // Cetak nilai baru (hasil toggle)
    console.log("index in active:", updateIndex); // Cetak nilai baru (hasil toggle)
  };

  useEffect(() => {
    console.log("Updated index in navbar:", updateIndex);
}, [updateIndex]);


useEffect(() => {
  fetch(window.location.href)
    .then((res) => {
      if (res.status === 404) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    })
    .catch(() => setIsNotFound(true)); // Jika fetch error, anggap 404
}, [pathname]);

  const handleAnimationEnd = () => {
    // Fungsi ini akan dipanggil setelah animasi selesai
    console.log("Hamburger animation finished!");
  };

  // Function ini untuk mengarahkan user yang checkout dengan user baru agar tetap ter-verification
  const handleBack = () => {
    handleBookingDeletedChartInSession(); 
    router.push("/auth/login"); 
    
  };
  
  const handleCloseHam = () => {
    setHamburger(false)
    setUpdateIndex(1)
  }

  const handleBooking = () => {

    DeletedSession().catch((error) => console.error('Error during unload:', error));
    localStorage.removeItem('cart_vila');
    localStorage.removeItem('Params');
    localStorage.removeItem('Night');

  }

  const handleBookingNonDeletedSession = () => {

    localStorage.removeItem('cart_vila');
    localStorage.removeItem('Params');
    localStorage.removeItem('Night');

  }

  const handleBookingDeletedChartInSession = () => {

    DeletedCartInSession().catch((error) => console.error('Error during unload:', error));
    localStorage.removeItem('cart_vila');
    localStorage.removeItem('Params');
    localStorage.removeItem('Night');

  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const getBackgroundColor = () => {
    if (pathname === "/faq") return "bg"; 
    if (isNotFound) return "bg-white"; // Warna untuk halaman Not Found
  };

  const getHoverColor = () => {
    if (pathname === "/") return "hover:text-color1 text-color3 "; // Contact
    if (pathname === "/contact") return "hover:text-color1  text-color3 "; // Contact
    if (pathname === "/terms-conditions") return "hover:text-color1  text-color3 "; // Contact
    if (pathname === "/privacy-policy") return "hover:text-color1  text-color3 "; // Contact
    if (pathname === "/faq") return "hover:text-color1  text-color3 "; // Contact
    return "backdrop-blur-sm";
  };

  const getBackgroundColorUl = () => {
    if (pathname === "/our-vila") return "text-1"; 
    if (pathname === "/privacy-policy") return "text-color2"; 
    if (pathname === "/terms-conditions") return "text-color2"; 
    if (pathname === "/order-status") return "text-color2"; 
    if (pathname === "/faq") return "text-color2"; 
    if (isVilaPage) return "text-color2";
    if (isNotFound) return "text-color2"; 
    if (pathname === "/booking/offers") return "text-color2"; 
    if (pathname === "/auth/member") return "text-color2"; 
    if (pathname === "/booking") return "text-color2"; 
    if (pathname === "/contact") return "text-color2"; 
    if (pathname === "/auth/login") return "text-color2"; 
    if (pathname === "/auth/register") return "text-color2"; 
    if (pathname === "/auth/confirm-reset") return "text-color2"; 
    return "text-white";
  };
  
  // Memeriksa Me

  useEffect (() => {
    
      const handleMe = async () => {
        try {
          const response = await http.get('/auth/me');
          
          setDataMe(response.data.data)

          // toast.success(response.data.message || 'Success login', {
          //   position: "bottom-right",
          //   duration: 1000,
          //   iconTheme: { primary: "#C0562F", secondary: "#fff" },
          //   icon: "🛒",
          //   style: { borderRadius: "10px", background: "#C0562F", color: "#fff" },
          // });

        } catch (error : any) {
          // toast.error(error.response.data.message || error.message || 'server error', {
          //   position: "bottom-right",
          //   duration: 5000,
          //   iconTheme: { primary: "#ff0000", secondary: "#fff" },
          //   icon: "⚠️",
          //   style: { borderRadius: "10px", background: "#C0562F", color: "#fff" },
          // });
        }
      } 

      handleMe();
  },[])


  // h-[10rem] max-h-[4rem] 
  // md:max-h-[4.rem] 
  // tablet-lg:max-h-[9rem]  
  // h-hp-landscape:max-h-[3.5rem] 
  // h-sm:max-h-[4rem] 
  // h-sm1:max-h-[4.4rem] 
  // h-md:max-h-[4rem]

  return (
      <header
        className={`w-full fixed z-40 backdrop-blur-sm transition-colors duration-500 
          

          ${
            scrolled ? "bg-color1" : getBackgroundColor()
          }`}
        >

        <nav className="max-w-[1740px] mx-auto flex justify-between items-center px-3 sm:px-3 md:px-5 py-1 tablet-lg:py-2 h-hp-landscape:py-2">
            
        {/* 
        
          <label className=" hamburger w-full max-w-[28rem] h-[1.5rem] z-50 ">

            <input
              className="switcher w-[2rem]"
              type="checkbox"
              checked={hamburger}
              onChange={openModal}  
            />

            <span className={`hamburger__line w-[1.8rem] md:w-[2.2rem] xl:w-[2.8rem] ${scrolled ? 'bg-color2':'bg-slate-800'}  `}></span>
            <span className={`hamburger__line w-[1.8rem] md:w-[2.2rem] xl:w-[2.8rem] ${scrolled ? 'bg-color2':'bg-slate-800'}  `}></span>
            <span className={`hamburger__line w-[1.8rem] md:w-[2.2rem] xl:w-[2.8rem] ${scrolled ? 'bg-color2':'bg-slate-800'}  `}></span>
            <span className={`hamburger__line w-[1.8rem] md:w-[2.2rem] xl:w-[2.8rem] ${scrolled ? 'bg-color2':'bg-slate-800'}  `}></span>
          
          </label> 
        
        */}

            
          <div className="w-full h-full">
            <Link href="/" className="flex 
              max-w-[4rem] max-h-[4rem]
              md:w-[6rem] 
              tablet-lg:w-[10rem] 
              tablet-lg:h-[4rem] 
              hp-landscape:w-[4rem] 
              h-sm:w-[6rem] 
              h-md:w-[5rem] 
              h-md2-xl:w-[6rem]
              h-md2-xl:h-[2.2rem]
              ">
                
            <Image src="/assets/Logo/folk.png" alt="logo folk" width={600} height={400} className="object-contain rounded-md"/>
            
            </Link>
          </div>

          {/* <div className="">
            <Image
              src="/assets/Logo/adhisthana.png"
              alt="Wa"
              layout="responsive" // Membuat gambar fleksibel
              width={65} // Sesuai rasio asli
              height={65} // Sesuai rasio asli
              className="object-contain"
            />
          </div> */}
    

          <div className="flex justify-end tablet-xl:justify-center items-center w-full max-w-[30rem] ">

            <ul className={`hidden text-[13px]  font-semibold tablet-lg:flex justify-center items-center gap-2 md:gap-4 lg:gap-6  w-full max-w-[20rem] ${scrolled ? 'text-color2':getBackgroundColorUl()} `}>

              <Link href="/">
                <li className={`cursor-pointer  transform transition-transform hover:scale-110 ${scrolled ? 'hover:text-black text-color3':`${getHoverColor()}`}`}>
                  <h1 className="">HOME</h1>
                </li>
              </Link>

              <Link href="/about">
               <li className={`cursor-pointer transform transition-transform hover:scale-110 ${scrolled ? 'hover:text-black text-color3':`${getHoverColor()} `} `}>
                <h1>ROOMS</h1>
              </li>
              </Link>

              <Link href="/our-vila">
               <li className={`cursor-pointer transform transition-transform hover:scale-110 ${scrolled ? 'hover:text-black text-color3':`${getHoverColor()} `} `}>
                <h1>DESTINATIONS</h1>
                </li>
              </Link>
              

              <Link href="/contact">
               <li className={`cursor-pointer transform transition-transform hover:scale-110 ${scrolled ? 'hover:text-black text-color3':`${getHoverColor()} `} `}>
                  <h1>CONTACT</h1>
                </li>
              </Link>

            </ul>




            {/* Me Auth */}
            { !dataMe ? (

              // Pada saat Sudah Logn
                <>

                  {/* Tombol  { Booking dan Login } */}

                    { pathname === "/booking/offers"  || pathname === "/auth/register" ? (

                      <Link onClick={handleBooking} href="/auth/login" className={` flex justify-end sm:justify-center items-center w-full max-w-[10rem]`}>
                        <CustomButton 
                            title="Login"
                            btnType="button"
                            containerStyles="text-white bg-color1 px-4 sm:px-3 md:px-4 lg:px-8 py-1.5 lg:py-3 rounded-md"
                        />
                      </Link>

                      ): (

                      <>
                      { pathname === "/booking" ? (

                        <Link onClick={handleBooking} href="/auth/login" className={` flex justify-end sm:justify-center items-center w-full max-w-[10rem]`}>
                          <CustomButton 
                              title="Login"
                              btnType="button"
                              containerStyles="text-white bg-color1 px-4 sm:px-3 md:px-4 lg:px-8 py-1.5 lg:py-3 rounded-md"
                          />
                        </Link>

                        ) : (

                          <>
                          
                          { pathname === "/checkout" || pathname === "/order-status" ? (

                            <div onClick={handleBack} className={` flex justify-end sm:justify-center  items-center w-full max-w-[10rem]`}>
                              <CustomButton 
                                  title="Login"
                                  btnType="button"
                                  containerStyles="text-white bg-color1 px-2 sm:px-2 md:px-4 lg:px-8 py-1.5 lg:py-3 "
                              />
                            </div>

                          ) : (

                            // <Link onClick={handleBooking} href="/booking" className={` flex justify-end sm:justify-center  items-center w-full max-w-[10rem]`}>
                            <Link onClick={handleBooking} href={UrlAlaric}  className={` flex justify-end sm:justify-center  items-center w-full max-w-[10rem]`}>
                              
                              <CustomButton 
                                  title="BOOK"
                                  btnType="button"
                                  containerStyles="text-color1 bg-color2 px-4 sm:px-3 md:px-4  py-3 lg:px-8 py-1.5 lg:py-2 font-semibold rounded-3xl"
                              />
                              </Link>
                          )
}
                          </>

                            
                        )
                      }
                </>

              )}
                </>

              ) : (

                // Pada saat Sudah Login 
                <>

                  { pathname === "/booking" || pathname === "/booking/offers" || pathname === "/checkout"  || pathname === "/order-status"  ? (


                    <Link onClick={handleBookingNonDeletedSession} href="/auth/member" className={` flex justify-end sm:justify-center  items-center w-full max-w-[10rem]`}>
                    <CustomButton 
                      title={`${dataMe.name.length > 8 ? dataMe.name.slice(0, 8) + '...' : dataMe.name}`}
                      btnType="button"
                      containerStyles="text-white bg-color2 px-4 sm:px-4 md:px-5 lg:px-8 py-2 lg:py-3 rounded-md"
                    />

                    </Link>

                    ) : (

                      // <Link onClick={handleBookingDeletedChartInSession} href="/booking" className={` flex justify-end sm:justify-center  items-center w-full max-w-[10rem]`}>
                      <Link onClick={handleBookingDeletedChartInSession} href={UrlAlaric}  className={` flex justify-end sm:justify-center  items-center w-full max-w-[10rem]`}>
                        
                        <CustomButton 
                            title="BOOK"
                            btnType="button"
                            containerStyles="text-color1 bg-color2 px-2 sm:px-2 md:px-4 lg:px-8 py-2 lg:py-2 font-semibold rounded-3xl"
                        />
                      </Link>
                    )
                  }
                </>
      
              )
            }


          </div>


        </nav>

        <Hamburger isOpen={hamburger} onAnimationEnd={handleAnimationEnd} closeHamburger={handleCloseHam} updateIndexs={updateIndex}  onIndexChange={() => setUpdateIndex(0)} />

    </header>
  )
}

export default Navbar