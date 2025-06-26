

import { useEffect, useState } from 'react'

interface PaymentUrlProps{

    url : string;

}


const PaymentUrl = ( {url} : PaymentUrlProps) => {

    const [active, setActive] = useState (false)

    const handleRedirect = () => {
    setActive(true)
    }

    useEffect(() => {
        if (active === true) {
            // Redirect ke URL
            window.location.href = url;
        }
    }, [active, url]);

    return (
        <button onClick={handleRedirect} className=' max-w-[5rem] max-h-[5rem] px-4  py-1 bg-color1 text-white'>
            <p> Pay </p>
        </button>
    );
    
  
}

export default PaymentUrl