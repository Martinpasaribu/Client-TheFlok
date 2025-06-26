import React, { useState } from 'react'
import Image from 'next/image'
import { appointment, locked, logout, profile, profiles } from '@/style/icons'
import { Logout } from '@/app/auth/logout/Logout'
import MainLoading from '@/component/mainLoading/loading'
interface LeftProps {

    setView : ( view : string ) => void
}


const LeftMini = ( { setView } : LeftProps) => {
const [load, setLoad] = useState (false)

  const handleView =  (views : string) => {
    setView(views ? views : '')
  }  

    const handleExit =  async () => {
       const Load = await Logout()
  
       if(Load === true){
  
          setLoad(true)
  
          setTimeout(() => {
              setLoad(false)
          }, 1500 )
       }
    }  
  
  return (

        
        <ul className='flex justify-center items-center  gap-7  text-[14px] hp-md:text-[16px] font-bold w-full max-w-[17rem] hp-lg:max-w-[20rem] bg-color2  rounded-3xl h-full max-h-[3.2rem] hp-lg:max-h-[3.6rem] border-2 border-white'>
            
            { load && (<MainLoading/>)}
            
            <li onClick={() => handleView('Booking')} className='cursor-pointer hover:bg-color1 rounded-full p-2'>
                {/* <h1>Booking </h1> */}
                <Image
                    src={appointment}
                    alt='image appointment'
                    width={200}
                    height={200}
                    className="w-[1.4rem] h-[1.4rem]  hp-lg:w-[1.9rem] hp-lg:h-[1.9rem] max-w-[3.6rem] max-h-[3.6rem] object-cover "
                />
            </li>

            <li onClick={() => handleView('Profile')} className='cursor-pointer hover:bg-color1 rounded-full p-2'>
                {/* <h1>Profile </h1> */}
                <Image
                    src={profiles}
                    alt='image profiles'
                    width={200}
                    height={200}
                    className=" w-[1.4rem] h-[1.4rem] hp-lg:w-[1.8rem] hp-lg:h-[1.8rem] max-w-[3.6rem] max-h-[3.6rem] object-cover "
                />
            </li>
            <li onClick={() => handleView('Password')} className='cursor-pointer hover:bg-color1 rounded-full p-2'>
                {/* <h1>Password </h1> */}
                <Image
                    src={locked}
                    alt='image locked'
                    width={200}
                    height={200}
                    className=" w-[1.5rem] h-[1.5rem] hp-lg:w-[1.9rem] hp-lg:h-[1.9rem] max-w-[3.6rem] max-h-[3.6rem] object-cover "
                />
            </li>
            <li onClick={() => { handleExit() }} className='cursor-pointer hover:bg-color1 rounded-full p-2'>
                {/* <h1> Logout </h1> */}
                <Image
                    src={logout}
                    alt='image logout'
                    width={200}
                    height={200}
                     className="w-[1.6rem] h-[1.6rem] hp-lg:w-[2rem] hp-lg:h-[2rem] max-w-[3.6rem] max-h-[3.6rem] object-cover "  
                />
            </li>
        </ul>




  )
}

export default LeftMini