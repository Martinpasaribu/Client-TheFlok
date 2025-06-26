import { http } from "../http";



export const CekRefreshToken = async () => {
    try {

      const response = await http.get('/auth/cek-refresh-token'); 
      const result = response.data.data
      console.log(`Hasil cek refresh token :`, result)
      return  result

    } catch (error : any) {

        const result = error.response.data.success
        return  result
    }
  } 
