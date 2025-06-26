// accessToken.js
import axios from 'axios';
import { refreshToken } from './refreshToken';
import { UrlMain } from './http';



const accessTokens = axios.create({

  // baseURL: 'http://localhost:5001/api/v1', 
  baseURL: `${UrlMain}`,
  
  withCredentials: true
});


accessTokens.interceptors.request.use(async (config) => {

  const { token, expire, isValid } = await refreshToken();

  const currentDate = new Date();

  console.log("Checking token expiry...");
  console.log("Current Date:", currentDate);
  console.log("Token Expiry:", expire && expire * 1000);
  
  
  if (expire && expire * 1000 < currentDate.getTime()) {
    console.log("Token expired, refreshing...");
  }

  config.headers.Authorization = `Bearer ${token}`;
  return config;

}, (error) => {
  return Promise.reject(error);
});

export default accessTokens;
