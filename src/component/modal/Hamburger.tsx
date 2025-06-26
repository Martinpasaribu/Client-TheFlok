import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CustomButton from '../buttons/CustomButton'
import ButtonNav from '../buttons/ButtonNav';
import Image from 'next/image';
import ButtonNavLink from '../buttons/ButtonViewNav';
import { DeletedSession, DeletedCartInSession } from '@/app/booking/utils/ManageSession';


interface HamburgerProps {
    isOpen: boolean;
    onAnimationEnd?: () => void;
    closeHamburger: () => void;
    onIndexChange: () => void;
    updateIndexs: number;
  }
  
  const Hamburger = ({ isOpen, onAnimationEnd, closeHamburger, updateIndexs, onIndexChange}: HamburgerProps) => {
    const [animationClass, setAnimationClass] = useState<string>("");
    const [animationClassImage, setAnimationClassImage] = useState("animate-sidebar_in");
    const [visible, setVisible] = useState<boolean>(false);
    const [activeButton, setActiveButton] = useState<string | null>(null); // State untuk tombol aktif
    const [currentIndexImage, setCurrentIndexImage] = useState<any>(updateIndexs); // State untuk tombol aktif

    const [isImageChanging, setIsImageChanging] = useState(false);

    const images = [
        "/assets/ImageNav/image1.jpg",
        "/assets/ImageNav/image2.jpg",
        "/assets/ImageNav/image3.jpg",
        "/assets/ImageNav/image4.png",
        "/assets/ImageNav/image5.png",
        "/assets/ImageNav/image6.png",
        "/assets/ImageNav/image7.png",
      ];

      


      useEffect(() => {
        if (isOpen) {
          onIndexChange();
          setCurrentIndexImage(updateIndexs); // Sinkronkan nilai
        }
      }, [isOpen, updateIndexs, onIndexChange]);

      
    const handleButtonActive = (title: string) => {
        setActiveButton(title); // Tetapkan tombol yang diklik sebagai aktif
    };

    const handleBooking = async() => {
  
      await DeletedSession().catch((error) => console.error('Error during unload:', error));
      localStorage.removeItem('cart_vila');
      localStorage.removeItem('Params');
      localStorage.removeItem('Night');
      closeHamburger()
    }


    const handleBookingDeletedChartInSession = () => {
  
      DeletedCartInSession().catch((error) => console.error('Error during unload:', error));
      localStorage.removeItem('cart_vila');
      localStorage.removeItem('Params');
      localStorage.removeItem('Night');
      closeHamburger();
      setCurrentIndexImage(0);
    }

    const closeHamburgers = () => {
      closeHamburger();
      setCurrentIndexImage(0);
    }

    const setIndexImage = (index : any) => { 
      setCurrentIndexImage(index);
    }


    useEffect(() => {
        if (isImageChanging) {
            setAnimationClassImage("animate-sidebar_in"); // Fade out
          const timeout = setTimeout(() => {
            setAnimationClassImage("animate-sidebar_in"); // Fade in after a short delay
            setIsImageChanging(false); // Stop the changing state after animation
          }, 500); // Duration of the fade out
    
          return () => clearTimeout(timeout); // Cleanup timeout
        }
      }, [currentIndexImage, isImageChanging]);



    // Mengatur animasi dan visibilitas
    useEffect(() => {
      if (isOpen) {
        setVisible(true); // Tampilkan elemen
        setAnimationClass("animate-sidebar_in"); // Jalankan animasi masuk
      } else if (visible) {
        setAnimationClass("animate-sidebar_out"); // Jalankan animasi keluar
      }
    }, [isOpen]);
  
    useEffect(() => {
        if(currentIndexImage){
            console.log('nilai index yang terbuka :', currentIndexImage)
        }
    }, [currentIndexImage])

    // Menangani akhir animasi
    const handleAnimationEnd = () => {
      if (!isOpen) {
          
        
              setVisible(false); // Hapus elemen dari DOM setelah animasi selesai
         
      }
    };
  
    if (!visible) return ( <div className='hidden'></div>); // Hapus elemen dari DOM jika tidak terlihat

    
    return (
      <div
        className={`z-30 fixed inset-0 bg-white h-screen ${animationClass}  transition-transform `}
        onAnimationEnd={handleAnimationEnd} // Callback setelah animasi selesai
      >
         <div className='flex md:gap-4 w-full h-full justify-center items-center'>

            <div className='w-full justify-center p-2'>
              <ul className='flex w-full  flex-col h-full  justify-center items-start md:items-end p-8 md:p-20 gap-4'>

              {[
                  "Home",
                  "Explore Our Villas",
                  "Book Your Stay",
                  "Contact & Location",
                  "Frequently Asked Questions",
                  "Privacy Policy",
                  "Terms & Conditions",

              ].map((title, index) => (
                  <ButtonNav
                  key={title}
                  title={title}
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  handleClick={() => {handleButtonActive(title), setIndexImage(index) }}
                  setIndexImage={index}
                  isActive={activeButton === title} 
                  
                  />
              ))}

              </ul>

              <div className={` ${currentIndexImage > 0 ? " sm:hidden w-full  flex justify-center items-center":"hidden"}`}>
                <ButtonNavLink index={currentIndexImage} setClose={closeHamburgers}/>
              </div>
            </div>


            <div className='flex absolute top-0 right-0 sm:w-full sm:h-full sm:hidden flex-col justify-start items-center'>
                <div className='flex justify-end items-center px-2 py-5 w-full'>
                    <Link onClick={handleBookingDeletedChartInSession} href="/booking" className="flex-center w-full max-w-[10rem]">
                        <CustomButton 
                            title="Book Now"
                            btnType="button"
                            containerStyles="text-white bg-color1 px-3 sm:px-2 md:px-4 lg:px-8 py-2 lg:py-3 rounded-md "
                        />
                    </Link>
                </div>
            </div>

            <div className='hidden w-full h-full sm:flex flex-col justify-start items-center'>

                <div className='flex justify-end items-center p-8 w-full'>
                    <Link onClick={handleBookingDeletedChartInSession} href="/booking" className="flex-center w-full max-w-[10rem]">
                        <CustomButton 
                            title="Book Now"
                            btnType="button"
                            containerStyles="text-white bg-color1 px-1 sm:px-2 md:px-4 lg:px-8 py-1 lg:py-3 rounded-md "
                        />
                    </Link>
                </div>

                <div className='w-full h-full flex justify-center md:justify-start items-center  '>
                    
                  <div className='w-full max-w-[22rem] h-full max-h-[27rem] md:max-h-[30rem] desktop:max-w-[32rem] justify-start items-center flex flex-col gap-5'>


                    <Image
                            src={images[currentIndexImage]}
                            alt={`Image ${currentIndexImage + 1}`}
                            width={500} // Sesuaikan ukuran gambar
                            height={300}
                            key={currentIndexImage}
                            className={`${animationClassImage} rounded-lg w-[18rem] h-[15rem] md:w-[22rem] md:h-[18rem] tablet-xxl:w-[32rem] tablet-xxl:h-[25rem] `}
                        />


                    <div className={` ${currentIndexImage > 0 ? "hidden sm:block justify-center items-center  w-full max-w-[20rem] ":"hidden"}`}>
                        
                        <ButtonNavLink index={currentIndexImage} setClose={closeHamburgers}/>

                    </div>




                  </div>
                   
                </div>
            </div>


         </div>

        
        
        
        
        
       



    </div>
  )
}

export default Hamburger