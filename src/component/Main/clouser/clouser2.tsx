import React from 'react'
import Image from 'next/image'

interface ClosureProps {
  images : string;
  title : string;
  describe : string;
}

const Closure2 = ( {images,title,describe}:ClosureProps ) => {
  return (
    <div className="flex justify-center items-center flex-col gap-8">

        <div className="w-full max-w-[18rem] h-full max-h-[12rem]">
            <Image
                src={images}
                alt='image ig'
                width={800}
                height={400}
                className="w-full h-full object-contain rounded-md"
            />
        </div>

        <div className="flex flex-col gap-8 w-full max-w-[30rem] ">

            <div className="text-white text-sm text-center flex-center">
              <h1 className='w-full max-w-[15rem] bg-grey/40  rounded-md '>{title}</h1>
            </div>
            <h2 className="text-slate-500 text-xs text-justify font-light mt-5">{describe}</h2>
            
        </div>
    </div>
  )
}

export default Closure2