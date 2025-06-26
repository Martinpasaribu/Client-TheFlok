// "use client"

// import React, { useEffect, useState } from 'react'
// import Image from 'next/image'
// import { useRouter } from 'next/navigation';
// import { RoomModels } from '@/models/roomModels';
// import Skelton from './component/Skelton';
// import Link from "next/link";

// const Layout = () => {


//     const [vila, setVila] = useState<RoomModels[]>([]);

//     useEffect(() => {
//         const fetchVila = async () => {
//           try {
//             const response = await fetch("/api/vila");
//             const data = await response.json();
//             setVila(data.data);
//             console.log("Data fetched:", data.data);
//           } catch (error) {
//             console.error("Error fetching posts:", error);
//           }
//         };
    
//         fetchVila();
//       }, []);

      
//     const handleDetailRoom = (id:any) => {

//         router.push(`/vila/${id}`);
    
//       }

//     const scrollToVila = () => {
//         const sectionVila = document.getElementById('section-vila');
//         if (sectionVila) {
//             sectionVila.scrollIntoView({ behavior: 'smooth' });
//         }
//     };
    

//   return (
//     <div>

//         {/* Image */}
//         <section className='w-full h-screen bg-OurVila_bg bg-no-repeat bg-cover'>

//         </section>


//         {/* Describe */}
//         <section className='w-full  h-screen flex-center flex-col '>
            
//             <div className='w-full max-w-[60rem] gap-8 flex-center flex-col'>
//                 <h1 className='text-[18px]'>
//                     Immerse Yourself in Serenity
//                 </h1>
            
//                 <p className='text-[12px] md:text-[16px] text-slate-600 text-justify px-4'>
//                     Surrounded by the serene beauty of rice paddies and mountains, our villas provide a peaceful escape where modern comfort meets Javanese tradition. Each villa is thoughtfully designed to blend harmoniously with the natural surroundings, offering an intimate retreat that feels like a part of the landscape. Immerse yourself in a tranquil atmosphere, where every detail is crafted for relaxation and rejuvenation. Whether you&apos;re unwinding by the private pool or enjoying the peaceful ambiance of your villa, Adhisthana Villas invites you to reconnect with nature, recharge your spirit, and embrace the serenity that surrounds you.
//                 </p>

//                 <button onClick={scrollToVila} className="underline decoration-[#C0562F] text-color1 hover:bg-color1 hover:text-white px-4 rounded-md">
//                     <h1>View villas</h1>
//                 </button>
//             </div>

//         </section>


//         {/* Our Vila */}
//         <section className=''>

//                 {/* ELement 1 */}
//                 <figure id='section-vila'  className='flex sm:flex sm:flex-row flex-col md:p-5 py-10 gap-8 md:gap-1'>

//                     <div className='w-full flex-center flex-col text-center hp-xl:text-left px-4 md:px-1 '>
//                         <div className='w-full max-w-[34rem] flex flex-col gap-5 md:gap-10'>
//                             <h1 className='text-[20px]'>Our Villas</h1>
//                             <p className='text-slate-600 text-[13px] md:text-[17px]'>Experience the art of relaxation in our thoughtfully designed villas, where Javanese charm meets modern comfort to create a tranquil retreat for every traveler.</p>
//                         </div>
//                     </div>

                    
                       
//                     { vila && vila.length > 0 ? (

//                     <div  className='w-full h-full'>

//                         <div className=' w-full  h-full max-h-[35rem] p-4'>
//                             <Image src={vila && vila.length > 0 ? vila[0].imageShort : `/assets/Image/imagenf.jpg`} alt='OurVila' width={800} height={400} className='w-full h-full object-contain'/>
//                         </div>
                        
//                         <div className="text-slate-600  flex flex-col gap-5 text-left p-2 px-10">
//                             <div className='w-full max-w-[30rem] flex flex-col gap-4'>

//                                 <div className="flex flex-col gap-8">
//                                     <h1 className="text-color2 font-semibold text-center sm:text-left animate-source">
//                                         {vila && vila.length > 0 ? vila[0].nameAdditional : '/assets/Image/imagenf.jpg'}
//                                     </h1>
//                                     <h2 className="text-slate-500 animate-modal text-[12px] md:text-[16px]"> {vila && vila.length > 0 ? vila[0].shortDesc : ''}</h2>
//                                 </div>

//                                 <div className="flex flex-row sm:flex-col justify-around sm:justify-start items-start gap-4">
//                                     <button onClick={() => { handleDetailRoom(vila[0]._id) }} className="underline decoration-[#C0562F] text-color1">
//                                         <h1>Vila Details</h1>
//                                     </button>
//                                     <Link href="/booking" className=" text-white bg-color1 px-5" >
//                                             <h1>Book</h1>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
                    

//                     </div>

//                     ) : (

//                     <div className='w-full flex-center'>
//                         <Skelton />
//                     </div>

//                     )}

                    

//                 </figure>

//                 {/* Element 2 */}


//                 { vila && vila.length > 0 ? (
                    
//                     <figure className='grid grid-cols-1 hp-xl:grid-cols-2 gap-8 hp-xl:gap-2 place-items-center p-5 py-10 bg-color4'>
                    
//                         {vila && vila.slice(1).map((item) => (

//                             <div key={item._id} className="flex-center flex-col gap-6 w-full max-w-[35rem] h-full ">
                            
//                                 {/* Gambar */}

//                                 <div className='w-full max-w-[30rem] h-full max-h-[20rem] '>
//                                     <Image 
//                                         src={item.image && item.imageShort ? item.imageShort : '/assets/Image/imagenf.jpg'}
//                                         alt={`Image of ${item.name}`} 
//                                         width={800} 
//                                         height={400} 
//                                         className="w-full h-full  object-contain" 
//                                     />
//                                 </div>

//                                 {/* Deskripsi Vila */}
//                                 <div className="text-slate-600 w-full max-w-[28rem] h-full flex flex-col gap-5 text-left">
//                                     {/* Nama dan Deskripsi */}
//                                     <div className="flex flex-col gap-4 h-full">
//                                         <h1 className="text-color2 font-semibold text-center sm:text-left animate-source">
//                                             {item.nameAdditional}
//                                         </h1>
//                                         <h2 className="text-slate-500 animate-modal h-full  max-h-[10rem] text-[12px] md:text-[16px]">
//                                             {item.shortDesc}
//                                         </h2>
//                                     </div>

//                                     {/* Tombol Aksi */}
//                                     <div className="flex flex-row sm:flex-col justify-around sm:justify-start items-start gap-4">
//                                         <button 
//                                             onClick={() => handleDetailRoom(item._id)} 
//                                             className="underline decoration-[#C0562F] text-color1"
//                                         >
//                                             <h1>Vila Details</h1>
//                                         </button>
                                        
//                                         <Link href="/booking" className=" text-white bg-color1 px-5" >
//                                                 <h1>Book</h1>
//                                         </Link>
//                                     </div>
//                                 </div>

//                             </div>
//                         ))}

//                     </figure>

//                 ) :
//                 (
//                     <div className='grid grid-cols-2 gap-2 place-items-center p-5 py-10 bg-white'>
//                         <Skelton />
//                         <Skelton />
//                     </div>
//                 )

//             }

//         </section>

//     </div>
//   )
// }

// export default Layout