import { UserModels } from '@/models/userModels';
import { http } from '@/utils/http';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Image

from 'next/image';
import { profile, FaPhone, IoIosMail, FaRegEdit } from '@/style/icons';
const ChangeProfile = () => {

    const [dataMe, setDataMe] = useState<UserModels>();
  
  
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
        toast.error(error.response.data.message || error.message || 'server does not respond', {
          position: "bottom-right",
          duration: 5000,
          iconTheme: { primary: "#ff0000", secondary: "#fff" },
          icon: "⚠️",
          style: { borderRadius: "10px", background: "#C0562F", color: "#fff" },
        });
      }
    } 

    handleMe();
},[])

  return (
    <div className='p-4 mt-4 shadow-md w-full h-full'>
        { dataMe && (
          <div className='flex gap-2 h-full max-h-[8rem]'>

              <figure className='text-color1 w-full max-w-[5rem] hp-lg:max-w-[8rem] flex-center h-full'>
                
                <Image
                    src={profile}
                    alt='image cookies'
                    width={200}
                    height={200}
                    className="w-[4rem] h-[4rem] max-w-[6rem] max-h-[6rem] object-cover "
                />
                
              </figure>

              <div className="flex flex-col justify-start items-center w-full space-y-3 h-full">

                  <div className='flex justify-start items-center gap-2 w-full'>
                    
                    <div className='flex justify-start items-center gap-2 w-full'>

                      <div className='text-sm sm:text-xl font-semibold'> {dataMe?.name} </div>
                      <div> <span className='bg-green-200 text-sm text-green-900 px-3  rounded-xl'> Member </span></div>
                    
                    </div>

                    <button className='hidden hp-lg:flex justify-center items-center  gap-1 bg-color1 text-white p-1 px-2 rounded-md'>
                      <FaRegEdit  className='' size={17}/>
                      <h1 className='text-md  font-semibold'>Edit</h1>
                    </button>

                  </div>
                    
                  <div className='flex justify-start items-center gap-3 text-[12px] hp-lg:text-sm sm:text-[16px] font-semibold text-slate-600 w-full'> 
                    
                    <IoIosMail className='' size={20}/>
                    {dataMe?.email} 
                    
                  </div>

                  <div className='flex justify-start items-center gap-3 text-sm sm:text-md font-semibold text-slate-600 w-full'>
                    <FaPhone className='' size={17}/>
                    <h1 className='text-[12px] hp-lg:text-[14px] sm:text-[16px] text-slate-700 font-semibold'>{dataMe?.phone}</h1>
                  </div>

                  <button className='flex hp-lg:hidden justify-end items-center w-full'>
                      <div className='flex justify-start items-center gap-1 bg-color1   text-white p-1 px-2 rounded-md'>

                        <FaRegEdit  className='' size={17}/>
                        <h1 className='text-[12px]  font-semibold'>Edit</h1>

                      </div>
                    </button>
              
              </div>

          </div>
        )}
    </div>
  )
}

export default ChangeProfile