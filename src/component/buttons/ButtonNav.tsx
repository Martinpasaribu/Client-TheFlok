import React, { useEffect } from 'react'


interface ButtonNavProps {
    title: string ;
    containerStyles ? : string ;
    handleClick ?: () => void ;
    btnType? : "button" | "submit" ;
    textStyles? : string;
    rightIcon?: string;
    isDisabled? : boolean;
    isActive?: boolean; // Status aktif
    setIndexImage?: number;
    setImage?: (setCurrentIndexImage? : number) => void;
}



const ButtonNav = (
    {
        title, 
        containerStyles, 
        handleClick, 
        btnType, 
        textStyles, 
        isActive, 
        setImage, 
        setIndexImage ,
        rightIcon }: ButtonNavProps) => {
    
    useEffect(() => {
        if(setIndexImage){
            setImage?.(setIndexImage)
        }
    },[setImage, setIndexImage] )

  return (
    

        <button
        type={btnType || "button"}
        onClick={handleClick}
        className={`select-none relative py-4 flex gap-2 justify-center items-center w-full max-w-[20rem] ${containerStyles}`}
        >
        <hr className="absolute top-0 left-0 z-40 h-0 w-full max-w-[5rem] border-b border-solid border-color1" />

        <h1
            className={`absolute flex justify-start -top-3 left-0 z-50 w-full bg-white ${
            isActive ? "animate-nav_in" : ""
            } ${textStyles}`}
        >
            {title}
        </h1>
        </button>
  )
}

export default ButtonNav