import { http } from "../http";



export const MeData = async () => {
    try {

      const response = await http.get('/auth/me'); 
      const result = response.data.data
      return  result

    } catch (error : any) {

        const result = error.response.data.success
        return  result
    }
  } 
