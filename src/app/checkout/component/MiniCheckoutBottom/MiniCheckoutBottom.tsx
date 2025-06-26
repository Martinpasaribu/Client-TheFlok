import React from 'react'
import Image from 'next/image';
import { shopBag } from '@/style/icons';


interface MiniCheckoutBottomProps {
    animate : boolean ;
    handleAnimateButton : () => void;

}


const MiniCheckoutBottom = ( { animate, handleAnimateButton } : MiniCheckoutBottomProps) => {

  return (
    
               
        <div className='relative h-2 w-32 sm:hidden justify-end items-center max-w-[30rem] p-2 mt-5 z-30'>

            <button
            onClick={handleAnimateButton}
            type="submit"
            className={` ${animate 
                ? " flex-center gap-2 px-3 py-2 bg-color1 text-white fixed bottom-10 h-10 rounded-md  animate-sidebar_checkOut" 
                : " "
            }` }
            >
            <h1 className={`${animate ? "flex  hp-lg:px-2" : "hidden"}`}>Checkout</h1>


            </button>

            <div
            onClick={handleAnimateButton}
            className={` ${animate 
                ? "flex-center gap-2 px-2.5 py-2 bg-color1 text-white animate-checkout fixed bottom-10 h-10 rounded-md "
                : "flex-center gap-2 px-6 pr-4 py-2  text-white  fixed bottom-10 h-10 rounded-md "}`}
            >

            <Image
                src={shopBag}
                alt="image appointment"
                width={200}
                height={200}
                className={` ${animate 
                ? "w-[1.6rem] h-[1.6rem] hp-lg:w-[1.8rem] hp-lg:h-[1.8rem] max-w-[2rem] max-h-[2rem] object-cover"
                : "hidden" } `}
            />

            <div className={`${animate ? " hidden " : "bg-color1 p-2 px-5 rounded-md"}`}>
                <Image
                src={shopBag}
                alt="image appointment"
                width={200}
                height={200}
                className={`w-[1.6rem] h-[1.6rem] hp-lg:w-[1.8rem] hp-lg:h-[1.8rem] max-w-[2rem] max-h-[2rem] object-cover  `}
                />
            </div>


            </div>

        </div>


  )
}

export default MiniCheckoutBottom