import React from 'react'

const TransactionSkeleton = () => {

  return (

    <div  className='flex h-full  justify-around items-center text-xl gap-5 m-2 p-3 border-[1px] shadow-md rounded-xl'>

        <div role="status" className=" w-full space-y-8 animate-pulse">

            <div className="w-full h-full flex flex-col gap-2">

                <div className='w-full h-full flex gap-4'> 

                    <div className='w-1/2 space-y-4 '>

                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[20rem] "></div>
                        <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[90px] "></div>


                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[20rem] mb-4 mt-20"></div>
                        <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[90px] "></div>

                        
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700  max-w-[20rem] "></div>
                        <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[90px] "></div>


                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700  max-w-[20rem] mb-4 mt-8"></div>
                        <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[90px] "></div>

                    </div>
             
                </div>

                <div className='flex justify-end items-center'>
                        <div className=" bg-gray-300 rounded-md dark:bg-gray-700 w-24 h-10 "></div>
                </div>

            </div>

            <div className="w-full h-full flex flex-col gap-2">

                <div className='w-full h-full flex gap-4'>  

                    <div className='w-1/2 space-y-4'>

                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-48 "></div>
                        <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[90px] "></div>
                        <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[90px] "></div>

                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-48 mb-4 mt-8"></div>
                        <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[90px] "></div>

                    </div>

                    <div className='w-1/2 flex flex-col items-end justify-end '>

                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-48 mb-4"></div>

                    </div>

                </div>

                <div className='flex justify-end items-end'>

                    <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[90px] ">

                    </div>

                </div>

            </div>
            <span className="sr-only">Loading...</span>
        </div>


    </div>

  )
}

export default TransactionSkeleton