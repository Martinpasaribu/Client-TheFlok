import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { AxiosError } from 'axios';
import { UrlMain } from './http';


const axiosClient = axios.create({

 
  baseURL: `${UrlMain}`, 

  withCredentials: true
});

export async function refreshToken() {
  try {
    const response = await axiosClient.get('/auth/token');
    const token = response.data.accessToken;

    const decoded = jwtDecode(token);
    const expire = decoded.exp  
    const currentDate = new Date();

    console.log("Token dari refresh token:", token);
    console.log("Token expired:", expire);

    // Return object with token and expire time
    return {
      token,
      expire,
      isValid: expire && expire > currentDate.getTime() 
    };
  } catch (error) {
    if (error instanceof AxiosError) {

      console.error('Error checking session:', error.response ? error.response.data : error.message);
      

    }

    return {
      token: null,
      expire: null,
      isValid: false

    };
    

  }
}
