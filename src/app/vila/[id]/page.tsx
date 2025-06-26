"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation';
import { ImageIn, RoomModels } from '@/models/roomModels';
import { http } from '@/utils/http';
import ImageCarousel from '../component/Image-Carousel';



 const DetailVilaByID = () => {

    const { id } = useParams();
    const [room, setDataRoom] = useState<RoomModels[]>([]);
    const [imageRoom, setImageRoom] = useState<ImageIn[]>([])
    const [facility, setFacility] = useState<string[]>([])
    
        useEffect(() => {

            if (!id) {
                console.error("Room ID is missing!");
              
                return;
            }
        
        
            http.get(`/room/getRoomByParams/${id}`)
                .then((response) => {
                    setDataRoom(response.data.data);
                    console.log("Data Room by ID! :", response.data.data);
                })
                .catch((err) => {
                })
                .finally(() => {
    ;
                });
        }, [id]);

        useEffect(() => {
            if(room.length > 0){
                setImageRoom(room[0].image)
                setFacility(room[0].facility)
            }
        },[room])
        
  return (

    <div className='overflow-hidden'>

    { room.length > 0 && (

  
        <div className='w-full h-full pt-[8rem] gap-8 flex flex-col text-center text-xs md:text-lg font-[family-name:var(--font-geist-sans)]'>

            {/* Name Room */}
            <div className='text-[16px] md:text-[20px]'>
                <h1>{ room[0].nameAdditional}</h1>
            </div>

            {/* Poster */}
            <div>
                {/* <Image src={room[0].imagePoster} alt='peopleIcons' width={800} height={400} className='w-full h-full object-cover'/> */}

                <ImageCarousel imageData={room[0].image}/>
                
            </div>

            {/* Detail Info */}
            {/* <section className='flex justify-center md:grid md:grid-cols-3 w-full max-w-[43rem] tablet-xl:max-w-[50rem] mx-auto gap-8 md:gap-4 tablet-xl:gap-10  md:pl-12 tablet-xl:pl-16'>
                <div className='flex flex-col gap-2 '>
                    <h1 className='text-left text-[12px] md:text-[1rem]'>Max Occupancy</h1>
                    <figure className='flex justify-start items-center gap-2'>
                        <Image src={'/assets/IconImage/people.png'} alt='peopleIcons' width={100} height={100} className='h-4 md:h-5 w-4 md:w-5 object-cover'/>
                        <h1 className='text-slate-600 text-[10px] md:text-[13px] md:font-normal'>{room[0].maxCapacity} people</h1>
                    </figure>
                </div>
                <div className='flex flex-col gap-2 '>
                    <h1 className='text-left text-[12px] md:text-[1rem]'>Size</h1>
                    <figure className='flex justify-start items-center gap-2'>
                        <Image src={'/assets/IconImage/Size.png'} alt='peopleIcons' width={100} height={100} className='h-4 md:h-5 w-4 md:w-5 object-cover'/>
                        <h1 className='text-slate-600 text-[10px] md:text-[13px] md:font-normal'>{room[0].size} square meters</h1>
                    </figure>
                </div>
                <div className='flex flex-col gap-2 '>
                    <h1 className='text-left text-[12px] md:text-[1rem]'>Bed Type</h1>
                    <figure className='flex justify-start items-center gap-2'>
                        <Image src={'/assets/IconImage/bad.png'} alt='peopleIcons' width={100} height={100} className='h-4 md:h-5 w-4 md:w-5 object-cover'/>
                        <h1 className='text-slate-600 text-[10px] md:text-[13px] md:font-normal'>{room[0].bedType}</h1>
                    </figure>
                </div>
            </section> */}

            {/* Description and Image */}
            <div className='flex flex-col justify-center p-1 hp-lg:p-3 sm:p-10 md:p-1 md:flex-row overflow-hidden '>



                {/* Image */}
                <div className='flex flex-col w-full max-w-[50rem] gap-5 p-4 tablet-xl:p-10 '>
                    <p className='text-md hp-xl:text-xl md:text-xl text-center md:text-left'>{room[0].shortDesc}</p>
                    <p className='text-[10px] sm:text-sm text-gray-500 font-light text-justify md:text-left ' >{room[0].describe}</p>
                </div>


                {/* Describe */}
                <div className='flex md:justify-end font-light  w-full md:max-w-[10rem] tablet-xl:max-w-[20rem] text-left md:text-left '>
                    <ul className='flex list-disc  flex-col gap-2 text-[10px] sm:text-sm md:text-md text-slate-500 p-4 tablet-xl:p-10 pl-8 md:pl-0'>
                        <li className='text-slate-600 text-[10px] md:text-[14px] xl:text-[15px] '>{room[0].size}  square meters</li>
                        <li className='text-slate-600 text-[10px] md:text-[14px] xl:text-[15px] '>Max guests {room[0].maxCapacity} </li>
                        <li className='text-slate-600 text-[10px] md:text-[14px] xl:text-[15px] '>1 Bedroom </li>
                        <button className='pt-2 text-color1 text-left'>
                            <p>Floorplan</p>
                        </button>
                    </ul>
                </div>



                {/* 1,160 sq. ft. / 108 sq. m */}
            </div>


            {/* Fasilitas */}
            <div className='w-full h-full max-h-[45rem] md:max-h-[32rem] bg-color3 flex-center flex-col p-2 md:p-3 gap-4 md:gap-2'>
                <h1 className='text-color1 h-[2rem] tablet-xl:h-[5rem] flex-center'>Room Amenities</h1>


                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 md:p-5 pl-4 md:pl-10 w-full max-w-[70rem] xl:max-w-[85rem] list-disc list-inside text-slate-500 mb-6'>
                    {room && facility.map((item, index) => (
                        <li
                            key={index}
                            className='text-left text-[10px] md:text-sm'
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                {/* <ul className=' place-items-center grid grid-cols-2 sm:grid-rows-4 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 md:grid-rows-4  p-4 md:p-5 pl-4 md:pl-10 gap-4 w-full max-w-[70rem]  xl:max-w-[85rem] list-disc list-inside text-slate-500 mb-6'>
                    {room && facility.map((item, index) => (
                        <li
                         key={index} className='w-full text-left  md:text-sm'>{item}</li>
                    ))}

                </ul> */}

            </div>




        </div>

    )}

    </div>
  )
}

export default DetailVilaByID
