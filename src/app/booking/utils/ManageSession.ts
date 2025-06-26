"use client"

import { http } from "@/utils/http";

export const DeletedSession = async () => {
    try {

        const response = await http.post(`/session/remove-session`, {
            headers: { 'Content-Type': 'application/json' },
        })

        const result =  response ;

        return { success: true, message: result.data.message };

    } catch (error) {
      return { success: false, message: 'Terjadi kesalahan saat menghapus cart.' };
    }
  };

export const DeletedCartInSession = async () => {
    try {

        const response = await http.post(`/session/remove-cart-in-session`, {
            headers: { 'Content-Type': 'application/json' },
        })

        const result =  response ;

        return { success: true, message: result.data.message };

    } catch (error : any) {
      return { success: false, message: error.response?.data?.message || 'Terjadi kesalahan saat menghapus cart.' };
    }
  };
  


// export const DeletedCart = async () => {
//   try {
//     const response = await fetch('/api/cart', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       credentials: 'include',
//     });

//     console.log('Response Headers:', response.headers); // Debug header respons

//     if (response.ok) {
    
//       const data = await response.json();
//       return { success: true, message: data.message };
//     } else {
//       const errorData = await response.json();
//       return { success: false, message: errorData.error || 'Gagal menghapus cart.' };
//     }
//   } catch (error) {
//     return { success: false, message: 'Terjadi kesalahan saat menghapus cart.' };
//   }
// };
