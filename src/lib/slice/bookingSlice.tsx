// PayloadAction

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {  http } from '../../utils/http'
import { AxiosError } from 'axios';
import { ContactModels } from '@/models/contactModels';
import { BookingModels } from '@/models/bookingModels';
import { BucketModels } from '@/app/booking/models';
import { RoomModels } from '@/models/roomModels';




// State awal untuk packets
interface BookingState {
  stateBooking: BookingModels;
  stateCheckIn: string;
  stateCheckOut: string;
  stateCartVila: [];
  stateChartRes: BucketModels []
  stateDateUpdate: string | null;
  isProcessing: boolean;
  isError: boolean,
  isSuccess: boolean,
  isLoading: boolean,
  message: string,
}

interface ErrorResponse {
  msg: string;
}

const initialState: BookingState = {
  stateBooking: {} as BookingModels,
  stateCartVila: [],
  stateChartRes:[],
  stateDateUpdate: '',
  stateCheckIn:'',
  stateCheckOut:'',
  isProcessing: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};



// // Action async untuk getPacket
// export const addBooking = createAsyncThunk<BookingModels,BookingModels,{ rejectValue: string }>('booking/addBooking', async (booking, thunkAPI) => {

//     try {

//         const response = await http.post('/booking/addBooking', booking);
//         return response.data;

//     } catch (error) {
        
//         const axiosError = error as AxiosError<ErrorResponse>;

//         if (axiosError.response && axiosError.response.data) {
//           const message = axiosError.response.data.msg; 
//           return thunkAPI.rejectWithValue(message); 
//         }
  
//         // Jika error tidak sesuai dengan tipe yang diharapkan
//         return thunkAPI.rejectWithValue('An unexpected error occurred');
//     }
// });


// export const getOffers = createAsyncThunk<BookingModels,BookingModels,{ rejectValue: string }>('booking/getOffers', async (date, thunkAPI) => {

//     try {

//         const response = await http.post('/booking/getOffers', date);
//         return response.data;

//     } catch (error) {
        
//         const axiosError = error as AxiosError<ErrorResponse>;

//         if (axiosError.response && axiosError.response.data) {
//           const message = axiosError.response.data.msg; 
//           return thunkAPI.rejectWithValue(message); 
//         }
  
//         // Jika error tidak sesuai dengan tipe yang diharapkan
//         return thunkAPI.rejectWithValue('An unexpected error occurred');
//     }
// });




// Slice packets
const bookingSlice = createSlice({
  name: 'Booking',
  initialState,
  reducers: {


    setCheckIn(state, action) {
      state.stateCheckIn = action.payload
      console.log("checkIn redux",state.stateCheckIn)

    },
    setCheckOut(state, action) {
      state.stateCheckOut = action.payload
      console.log("checkOut redux",state.stateCheckOut)
    },

    clearChart(state) {
      state.stateChartRes = []
      console.log("Clear chart",state.stateChartRes)
    },
    
    setAddChart(state, action) {
      // Ambil data cart_vila dari localStorage
      const cartVila = JSON.parse(localStorage.getItem('cart_vila') ?? '[]') || [];
    
      // Cari item berdasarkan ID
      const existingItem = cartVila.find((item: { data: { id: any } }) => item.data.id === action.payload.id);
    
      if (!existingItem) {
        // Jika item tidak ada, tambahkan item baru
        const newItem = {
          data: action.payload, // Tambahkan payload sebagai data
          quantity: 1,          // Set jumlah awal
        };
        cartVila.push(newItem);
    
        console.log('Data ditambahkan ke cart:', newItem);
      } else {
        // Jika data sudah ada, periksa kecocokan
        const isSameData = JSON.stringify(existingItem.data) === JSON.stringify(action.payload);
    
        if (!isSameData) {
          // Tambahkan data lain jika tidak cocok
          const newItem = {
            data: action.payload, // Tambahkan payload sebagai data baru
            quantity: 1,          // Set jumlah awal
          };
          cartVila.push(newItem);
    
          console.log('Data baru ditambahkan karena tidak cocok:', newItem);
        } else {
          console.log('Data sudah ada dan cocok, tidak ada perubahan:', existingItem);
        }
      }
    
      // Update state dan localStorage
      state.stateCartVila = cartVila;
      state.stateChartRes = cartVila
      localStorage.setItem('cart_vila', JSON.stringify(cartVila));
    }
    
    ,


    setAddVila(state, action) {
      const cartVila = JSON.parse(localStorage.getItem('cart_vila') ?? '[]') || []; 


      // Cari item di dalam array data
      const existingItem = cartVila.find((item: { data: RoomModels[] }) =>
        item.data.some((dataItem) => dataItem._id === action.payload)
      
      );

      const Room = existingItem.data.find((dataItem: any) => dataItem._id === action.payload); // Cari dataItem
      const  quantity = Room?.available;
      const Capacity = existingItem?.quantity

      if( quantity >  Capacity ) {

          if (existingItem) {
            // Tambahkan quantity jika data sudah ada
            existingItem.quantity += 1;
            // console.log('Quantity ditambah dengan ID:', action.payload);
          } else {
            // Tambahkan data baru jika tidak ditemukan
            const newItem = {
              data: [{ id: action.payload.id, ...action.payload }], // Tambahkan data baru di array data
              quantity: 1,
            };
            cartVila.push(newItem);
            // console.log('Data tidak ada yang sama, Data baru ditambahkan:', newItem);
          }
      }else {
        console.log('Mencapai Batas Maximal Room ', quantity)
      }
        // Perbarui state dan localStorage
      state.stateCartVila = cartVila;
      state.stateChartRes = cartVila;
      localStorage.setItem('cart_vila', JSON.stringify(cartVila));
    },
    
    
    setRemoveVila(state, action) {
      const cartVila = JSON.parse(localStorage.getItem('cart_vila') ?? '[]') || []; 
      // const existingItemIndex = cartVila.findIndex((item: { id: any }) => item.id === action.payload);
      const existingItemIndex = cartVila.findIndex((item: { data: BookingModels[] }) =>
        item.data.some((dataItem) => dataItem._id === action.payload)
      )

      if (existingItemIndex !== -1) {
        const existingItem = cartVila[existingItemIndex];
    
        if (existingItem.quantity > 1) {
          // Kurangi quantity jika lebih dari 1
          existingItem.quantity -= 1;
          console.log('Quantity dikurangi:', existingItem);
        } else {
          // Hapus data jika quantity = 1
          cartVila.splice(existingItemIndex, 1);
          console.log('Data dihapus dari cart:', existingItem);
        }
    
        state.stateCartVila = cartVila;
        state.stateChartRes = cartVila
        localStorage.setItem('cart_vila', JSON.stringify(cartVila));
      } else {
        console.log('Data tidak ditemukan di cart untuk dikurangi atau dihapus.');
      }
    },
    

    setGetChart (state) {
      const cartVila = JSON.parse(localStorage.getItem('cart_vila') ?? '[]') || []; 
      state.stateChartRes = cartVila
      console.log('hasil chart from local :', state.stateChartRes)
    },
  
    setIsProcessing(state, action) {
      state.isProcessing = action.payload;
    },
    
  },
  
  // extraReducers: (builder) => {
    
  //   builder

  //   .addCase(addBooking.pending, (state) => {
  //     state.isLoading = true;
  //   })

  //   .addCase(addBooking.fulfilled, (state, action) => {
  //     state.stateBooking = action.payload;
  //     state.isLoading = false;
  //   })

  //   .addCase(addBooking.rejected, (state, action) =>{
  //     state.isLoading = false;
  //     state.isError = true;
  //     state.message = action.payload ?? 'Failed to add booking';
  //   })

  //   //  Packet by Paramss 


  // },
});

export const { setCheckIn, setCheckOut, setAddChart, setAddVila, setRemoveVila, setGetChart, setIsProcessing , clearChart} = bookingSlice.actions;

export default bookingSlice.reducer;
