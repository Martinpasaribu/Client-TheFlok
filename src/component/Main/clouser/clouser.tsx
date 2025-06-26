import React from 'react'
import Image from 'next/image'

interface ClosureProps {
  images : string;
  title : string;
  describe : string;
}

const Closure = ( {images,title,describe}:ClosureProps ) => {
  return (
    <div className="flex flex-col gap-8">

        <div className="w-full  ">
            <Image
                src={images}
                alt='image ig'
                width={800}
                height={800}
                className="w-full h-full object-cover rounded-md"
            />
        </div>

        <div className="flex flex-col gap-8 w-full max-w-[30rem] ">

            <h1 className="text-color1 text-[15px] text-left ">{title}</h1>
            <h2 className="text-slate-600 text-justify font-normal text-[13px]">{describe}</h2>
            
        </div>
    </div>
  )
}

export default Closure