/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import Script from 'next/script'
import { handleMe } from '@/utils/me/getMe'
import { authCheckout } from '../auth/authCeckout/authCheckout'
import AuthCheckout from './component/auth-checkout/authCheckout'
import MainLoading from '@/component/mainLoading/loading'

const page = () => {

  const [ auth, setAuth ] = useState(false)
  const [ load, setLoad ] = useState(false)

      useEffect(() => {
  
         const DataMe = async() => {

          setLoad(true)
            try {
              
              const data = await handleMe()
  
              if( data === true ){
                setAuth(true)
                setLoad(false)
              }

            } catch (error) {
               setAuth(false)
               setLoad(false)

            }finally {
              setLoad(false)
            }

        }

        DataMe()
  
      },[])
  
  return (
    <div>
      
      { load && (<MainLoading/>)}

      { auth ? 
      
        ( <AuthCheckout/> )
      :
        ( <Layout  /> ) 
      }

        
        
    </div>

  )
}

export default page