import { http } from '@/utils/http';
import React from 'react'

interface authCheckoutProps {

    title:string;
    name:string;
    phone:string | number ;
    email:string;

}
interface loginCheckoutProps {
    email:string;

}


export const authCheckout = async ({ title, name, phone, email }: authCheckoutProps) => {

      try {

        const response = await http.post(`/user/register`, {
          email,
          name,
          title,
          phone,
        });
  
        return response.data; 
      } catch (error: any) {
        console.error("Error in authCheckout:", error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || "Gagal melakukan authCheckout.");
      }
    
  };
  

export const authLogin = async ({ email }: loginCheckoutProps) => {
   
      try {

  
        const response = await http.post(`/auth/login-checkout`, {
          email,
        });
  
        return response.data; // Kembalikan response jika berhasil
      } catch (error: any) {
        console.error("Error in loginCheckout:", error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || "Gagal melakukan loginCheckout.");
      }

  };
  

  export const checkUser = async ( email : string ) => {
  
      try {

        const response = await http.get(`/user/cek-user/${email}`);

        return response.data.success; 
      } catch (error: any) {
        console.error("Error in cek user:", error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || "Gagal melakukan cek user.");

      }
  };



