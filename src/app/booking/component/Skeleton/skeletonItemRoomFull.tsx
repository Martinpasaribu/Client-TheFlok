import { RoomModels } from '@/models/roomModels'
import { homeFull, PiWarningOctagonBold } from '@/style/icons'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ClouserImage from '../constant/clouserImage'
import { convertToRupiah } from '@/constants'
import { useAppSelector } from '@/lib/hooks/hooks'

interface RoomUnAvailable {
  RoomUnAvailable : RoomModels[]
}

const SkeletonRoomsFull = ( { RoomUnAvailable } : RoomUnAvailable) => {

  const chart = useAppSelector((state) => state.room.stateRoomsUnAvailable);
    
  const [ unVila, setUnVila ] = useState<RoomModels[]>()

  useEffect (() => {

      if(chart){
        setUnVila(chart);
        console.log(" data UnVila :", chart);
      }

  },[chart])

  function handleDetailRoom(_id: any) {
    throw new Error('Function not implemented.')
  }

  return (
    
    <div>

      { unVila && unVila.length > 0 ? (

        <div>
          { unVila.map((item : any, index :any) => (

            <div key={index} className=' flex h-full mx-[.5rem] tablet-lg:mx-[1.8rem] justify-around items-center text-xl gap-2 tablet-lg:gap-5 m-2 p-3 border-[1px] shadow-md rounded-xl'>

                {/* Item */}

                <div className=' w-full flex flex-col space-y-6 '>
                

                  {/* Name Vila */}
                  <div className='relative text-left '>

                    {/* <div className='corner-ribbon absolute top-1 -right-6 bg-slate-800 rounded-md text-white'>FULL</div> */}

                      <h1 className=' text-[16px]  md:text-xl tablet-xl:text-2xl font-bold text-color1 mb-2'>
                        {item.nameAdditional}
                      </h1>

                      <h1 className='bg-slate-700 text-white px-2 text-[14px] rounded-md text-center'>
                        Room Unavailable 
                      </h1>

                  </div>

                  <div className='flex flex-col hp-landscape:flex-row gap-5'> 

                    {/* Left */}

                    <div className='flex flex-col gap-4 w-full h-full hp-landscape:max-w-[18rem] tablet-lg:max-w-[22rem]'>
                    
                        <div className='w-full h-full'>
                            <ClouserImage images={ item.image } />
                          </div>

                        <figure className='w-full flex justify-center hp-landscape:justify-start'>

                          <ul className='flex gap-4 text-[15px] text-slate-600 font-semibold'>
                            <li className='flex-center gap-3'>
                           
                              <p></p>
                            </li>
                            <li className='flex-center gap-3'>
                              <p></p>

                            </li>
                            <li className='flex-center gap-3'>
                              <p> </p>

                            </li>
                          </ul>

                        </figure>

                        <button onClick={ () => { handleDetailRoom(item._id) }} className='text-slate-600 m-4'>
                          <h1 className='text-[14px] hp-md:text-[17px] font-semibold'> Rooms Detail </h1>
                        </button>
                    </div>

                    {/* Right */}   

                    <div className=' w-full flex flex-col justify-between text-slate-600'>


                      <div className='w-full flex justify-between items-start p-2 tablet-lg:p-4'>
                        
                        {/* Left */}
                        <div className='w-1/2 h-full flex flex-col  items-start space-y-2 hp-lg:space-y-4'>

                          <div className='space-y-2'>
                            <h1 className=' text-[14px] hp-landscape:text-[17px] font-semibold'> Basic Deal </h1>
                            <ul className='flex flex-wrap text-[11px] hp-landscape:text-sm gap-2 hp-lg:gap-4'>
                              <li className='flex-center gap-2'>
                                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <h1>
                                  Private swimming area
                                </h1>
                              </li>
                              <li className='flex-center gap-2'>
                                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <h1>
                                  Sitting area
                                </h1>
                              </li>                    
                              <li className='flex-center gap-2'>
                                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <h1>
                                  Personal refigerator
                                </h1>
                              </li>
                              <li className='flex-center gap-2'>
                                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <h1>
                                  King sized bed
                                </h1>
                              </li>
                              <li className='flex-center gap-2'>
                                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <h1>
                                  Coffee maker
                                </h1>
                              </li>
                              <li className='flex-center gap-2'>
                                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <h1>
                                  Bathtub
                                </h1>
                              </li>
                            </ul>
                          </div>


                          <div className='space-y-2'>
                            <h1 className='text-[12px] hp-landscape:text-[17px] font-semibold'> Payment Option </h1>
                            <ul className='flex flex-wrap text-[11px] hp-landscape:text-sm gap-4'>
                              <li className='flex-center gap-2'>
                                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <h1>
                                  Pay now
                                </h1>
                              </li>
                            </ul>
                          </div>

                        </div>

                        <div className='w-1/2 h-full flex flex-col items-end space-y-2 hp-lg:space-y-4'>

                          <div className='flex justify-end hp-md:justify-end items-end flex-col-reverse hp-md:flex-row gap-2 w-full'>
                            <p className='bg-red-100 text-slate-600 px-1 text-[9px] hp-landscape:text-[12px] font-bold rounded-3xl'>20% OFF</p>
                            <p className='line-through font-semibold text-[15px] hp-landscape:text-[17px]'>IDR </p>
                          </div>
                          <h1 className='font-bold text-[18px] hp-landscape:text-[21px] '>IDR {convertToRupiah(item.price)}</h1>
                          <p className=' text-[12px] hp-landscape:text-[15px]'>Includes taxes & fees</p>
                          <div className='h-10 '>

                          </div>
                        </div>

                      </div>


                    {/*               
                          <div className='w-full text-[16px] hp-xl:text-md flex justify-end p-1 hp-lg:p-4'>
                              <button onClick={()=> { handleAddChart (item._id)}} className='px-4 hp-xl:px-6 py-1 bg-color1 text-white font-semibold'>
                                <h1>Select</h1>
                              </button>
                            </div>
                  */}



                    
                    <div className='select-none flex justify-center items-center hp-xl:items-end hp-xl:justify-end w-full h-full max-h-[4rem] mt-6 mb-1'>

                      <div className='flex  justify-end items-center gap-1 text-[12px] bg-red-100 px-2 text-red-400 rounded-lg' >
                        <PiWarningOctagonBold size={15} className='w-5 h-5'  />
                        <h1>This room is unavailable for the selected date range</h1>
                      </div>


                    </div>
       


                    

                    </div>

                  </div>

                </div>


            </div>

          ))}
        </div>
      
      ) : ( 

      <div className='space-y-10'>
SADAAAAAAAAAAAAA
      </div>

     )}

    </div>
  )
}

export default SkeletonRoomsFull



// import { homeFull } from '@/style/icons'
// import Image from 'next/image'
// import React from 'react'

// const SkeletonRoomsFull = () => {
//   return (
    
//     <div  className='flex h-full max-w-[100rem]  mx-[2.2rem] justify-around items-center gap-5 m-2 p-3 border-[1px] shadow-md rounded-xl'>

//         <div role="status" className=" w-full flex-center ">
            
//         <div className=' '>

//           <Image
//               src={homeFull}
//               alt='image cookies'
//               width={200}
//               height={300}
//               className="w-[12rem] h-[12rem] max-w-[7rem] max-h-[7rem] object-cover "
//           />

//         </div  >
//         <div className='text-slate-600 font-semibold'>
          
//           <h1 className='text-[12px] sm:text-[18px]'> 
//             Sorry, the rooms in that date range are all full 
//           </h1>
//           <h2 className='text-[10px] md:text-[15px]'> please use another date range </h2>

//         </div>
//         </div>


//     </div>
//   )
// }

// export default SkeletonRoomsFull