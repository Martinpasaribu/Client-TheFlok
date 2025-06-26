import React from 'react'
import { mainLoading} from '@/style/icons'
import Image from 'next/image'


const MainLoading = () => {

  return (

    <div className='fixed inset-0 z-40 w-screen overflow-y-auto  bg-opacity-90 bg-white'>
        
        <div className="flex flex-col gap-5 min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">

            <Image
                src={mainLoading}
                alt='image appointment'
                width={200}
                height={200}
                className="w-[2rem] h-[2rem]  hp-lg:w-[3.5rem] hp-lg:h-[3.5rem] max-w-[4rem] max-h-[4rem] object-cover animate-spin_slow"
            />

            <div className='flex text-color1 text-[12px]  sm:text-[18px] '>
                <h1 className=' font-semibold '>
                    Loading
                </h1>
                <div className='pl-1 flex-center gap-1'>
                    <span className='sm:text-xl animate-jump1 font-bold text-biru3'> .</span> 
                    <span className='sm:text-xl animate-jump2 font-bold text-biru3'> .</span> 
                    <span className='sm:text-xl animate-jump3 font-bold text-biru3'> .</span> 
                </div>
            </div>
        </div>
    </div>

  )
}

export default MainLoading