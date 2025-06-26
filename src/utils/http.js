import axios from 'axios';

// URL Main


// export const UrlMain = 'http://localhost:5000/api/v1'

// export const UrlMain = 'https://adhistahan-serve.vercel.app/api/v1'

export const UrlMain = 'https://api.adhisthanavillas.com/api/v1'

// Konfigurasi untuk server

export const http = axios.create({
  baseURL: `${UrlMain}`,
  withCredentials: true,
});

// Konfigurasi untuk Client 
export const axiosClient = axios.create({
  baseURL: 'http://localhost:3002',
  withCredentials: true,
});  




// Konfigurasi untuk RapidAPI IMDB
const options = {
  baseURL: 'https://imdb-top-100-movies.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': '73c641987cmsh012d5fb40aeb84bp1ea436jsnc2b2e8193c87',
    'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
  },
};
export const apiMDB = axios.create(options);



