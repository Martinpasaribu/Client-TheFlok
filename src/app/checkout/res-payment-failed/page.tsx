import React, { Suspense } from 'react'
import PaymentFailed from './PaymentFailed'


const page = () => {
  return (
    <div>
          <Suspense fallback={<div>Loading...</div>}>
            <PaymentFailed/>
          </Suspense>


    </div>
  )
}

export default page