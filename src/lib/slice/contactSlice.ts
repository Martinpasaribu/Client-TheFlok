// PayloadAction

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {  http } from '../../utils/http'
import { AxiosError } from 'axios';
import { ContactModels } from '@/models/contactModels';




// State awal untuk packets
interface RoomState {
  stateContact: ContactModels;

  isError: boolean,
  isSuccess: boolean,
  isLoading: boolean,
  message: string,
}

interface ErrorResponse {
  msg: string;
}

const initialState: RoomState = {
  stateContact: {} as ContactModels,

  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};



// // Action async untuk getPacket
export const addContact = createAsyncThunk<ContactModels,ContactModels,{ rejectValue: string }>('contact/addContact', async (contact, thunkAPI) => {

    try {

        const response = await http.post('/contact/addContact', contact);
        return response.data;

    } catch (error) {
        
        const axiosError = error as AxiosError<ErrorResponse>;

        if (axiosError.response && axiosError.response.data) {
          const message = axiosError.response.data.msg; 
          return thunkAPI.rejectWithValue(message); 
        }
  
        // Jika error tidak sesuai dengan tipe yang diharapkan
        return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
});




// Slice packets
const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {



    
  },
  
  extraReducers: (builder) => {
    


    builder

    .addCase(addContact.pending, (state) => {
      state.isLoading = true;
    })

    .addCase(addContact.fulfilled, (state, action) => {
      state.stateContact = action.payload;
      state.isLoading = false;
    })

    .addCase(addContact.rejected, (state, action) =>{
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload ?? 'Failed to fetch packet';
    })

    //  Packet by Paramss 


  },
});

export const {  } = contactSlice.actions;

export default contactSlice.reducer;
