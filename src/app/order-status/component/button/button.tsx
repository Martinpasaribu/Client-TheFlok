/* eslint-disable react/prop-types */
import './button.css';

interface ButtonProps {
    children : any,
    onClick : () => void;
}

export const Button = ({ children, onClick } : ButtonProps) => {
    return (
            <div className='w-full flex justify-end'>
                <button className=" max-w-[20rem] max-h-[7rem] bg-blue-500 text-white px-4 py-2 rounded-md" onClick={onClick}>
                    {children}
                </button>
            </div>
    );
}