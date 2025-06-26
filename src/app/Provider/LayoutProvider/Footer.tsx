
import { footerLinks } from "@/constants"
import {  useAppSelector } from "@/lib/hooks/hooks";
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react";


const Footer = () => {


  
    // const darkMode = useAppSelector((state) => state.movie.stateTogle);

    
    // useEffect(() => {
    //     if (darkMode) {
    //       document.documentElement.classList.add('dark');
    //       localStorage.setItem('darkMode', 'true');
    //     } else {
    //       document.documentElement.classList.remove('dark');
    //       localStorage.setItem('darkMode', 'false');
    //     }
    //   }, [darkMode]);


  return (
    <footer className="flex flex-col text-black-100  border-gray-100 bg-color2 dark:bg-slate-900 pt-2">

        <div  className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-6 px-4 py-4">
            <div className="flex flex-col justify-center items-center  sm:items-start gap-6">

                <Image src="/assets/Logo/adhisthanaFooter.png" alt="logo" width={908} height={800} className="object-contain  h-[8rem] w-[8rem] sm:h-[4rem] sm:w-[12rem]" />

            </div>

            <div className="footer__links dark:text-white">
                {footerLinks.map((item) => (
                <div key={item.title} className="footer__link">
                    <h3 className="font-bold text-color1">{item.title}</h3>
                    <div className="flex flex-col gap-2">
                    {item.links.map((link) => (
                        <Link
                        key={link.title}
                        href={link.url}
                        className="text-white text-[13px]"
                        >
                        {link.title}
                        </Link>
                    ))}
                    </div>
                </div>
                ))}
            </div>
        </div>

        <div className='flex justify-between items-center flex-col-reverse tablet-lg:flex-row  mt-2 gap-5 border-t border-gray-100 sm:px-16 px-6 py-5 text-white'>
            <p className="w-full text-center md:text-left">@2025 Adhisthana. All rights reserved</p>

            <div className="flex sm:justify-end justify-center items-center max-sm:mt-4 gap-10 text-white flex-col hp-lg:flex-row w-full">
                <Link href="/faq" className="w-full max-w-[10rem] text-center">
                FAQ
                </Link>
                <Link href="/privacy-policy" className="w-full max-w-[10rem] text-center">
                Privacy & Policy
                </Link>
                <Link href="/terms-conditions" className="w-full max-w-[10rem] text-center">
                Terms & Condition
                </Link>
            </div>
        </div>

        
    </footer>
  )
}

export default Footer