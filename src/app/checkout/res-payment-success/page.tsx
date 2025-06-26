import React, { Suspense } from 'react'
import PaymentSuccess from './PaymentSuccess'


const page = () => {
  return (
    <div>
          <Suspense fallback={<div>Loading...</div>}>
          
            <PaymentSuccess/>

          </Suspense>

    </div>
  )
}

export default page