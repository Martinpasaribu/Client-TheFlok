import React from 'react'

const SkeletonItemOffers = () => {
  return (
    
    <div  className='flex h-full max-w-[70rem]  mx-[2.2rem] justify-around items-center text-xl gap-5 m-2 p-3 border-[1px] shadow-md rounded-xl'>

        <div role="status" className=" w-full space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
            
            <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                <svg className="w-10 h-11 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                </svg>
            </div>

            <div className="w-full h-full flex flex-col gap-2">

                <div className='w-full h-full flex gap-4'>          
                    <div className='w-1/2 space-y-4'>

                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 "></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[90px] "></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[90px] "></div>

                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 mt-8"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[90px] "></div>

                    </div>
                    <div className='w-1/2 flex flex-col items-end'>

                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-4"></div>
            
                    </div>
                </div>

                <div className='flex justify-end items-center'>
                        <div className=" bg-gray-200 rounded-md dark:bg-gray-700 w-36 h-10 "></div>
                </div>

            </div>
            <span className="sr-only">Loading...</span>
        </div>


    </div>
  )
}

export default SkeletonItemOffers