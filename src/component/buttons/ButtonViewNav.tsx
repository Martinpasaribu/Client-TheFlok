import React, { useEffect } from 'react'
import { useRouter } from "next/navigation";
import { DeletedSession, DeletedCartInSession } from '@/app/booking/utils/ManageSession';

interface ButtonNavProps {
    index: number ;
    setClose: () => void;
}

const url = [
    "/",
    "/our-vila",
    "/booking",
    "/contact",
    "/faq",
    "/privacy-policy",
    "/terms-conditions",
  ];


const ButtonNavLink = ({ index, setClose }: ButtonNavProps) => {
    
    const router = useRouter()

    const handleLink = async() => {

      if ( index === 2 ) {

        await DeletedCartInSession().catch((error) => console.error('Error during unload:', error));
        localStorage.removeItem('cart_vila');
        localStorage.removeItem('Params');
        localStorage.removeItem('Night');
        setClose()

        router.push(
          `${url[index]}`
        );
      } else {

        router.push(
          `${url[index]}`
        );

        setClose()

      }

    }

  return (
    

            <button  onClick={handleLink} className='w-full max-w-[22rem] flex justify-start p-2 '>


            <div className="relative text-md font-semibold w-full h-8 border border-transparent">
                <div className="absolute flex-center inset-0 before:content-[''] before:absolute before:top-0 before:left-0 before:w-6 before:h-6 before:border-t-2 before:border-l-2 before:border-black
                                            after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-6 after:h-6 after:border-b-2 after:border-r-2 after:border-black">
                
                    View

                </div>
            </div>

            

        </button>
  )
}

export default ButtonNavLink