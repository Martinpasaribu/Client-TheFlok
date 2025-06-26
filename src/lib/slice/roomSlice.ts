// PayloadAction

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {  http } from '../../utils/http'
import { AxiosError } from 'axios';
import { RoomModels } from '@/models/roomModels';



// State awal untuk packets
interface RoomState {
  stateRooms: RoomModels[];
  stateRoomsUnAvailable: RoomModels[];

  isError: boolean,
  isSuccess: boolean,
  isLoading: boolean,
  message: string,
}

interface ErrorResponse {
  msg: string;
}

const initialState: RoomState = {
  stateRooms: [],
  stateRoomsUnAvailable: [],

  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};



// // Action async untuk getPacket
// export const addPacket = createAsyncThunk('packets/addPacket', async (packet: any) => {
//   const response = await http.post('/v1/packet/addPacket', packet);
//   return response.data;
// });

// // Action async untuk getMovie
export const getRoom = createAsyncThunk <RoomModels[],void,{ rejectValue: string }> ('room/getRoom',  async (_, thunkAPI) => {

  try {
    const response = await http.get('/');
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
const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {

    // setStateMovieData(state, action: PayloadAction<any[]>) {
    //   state.stateMovie = action.payload;
    //   console.log("data movie in redux  :", state.stateMovie);
    // },

    // setGetPacketById(state, action) {
    //   state.statePacketId = action.payload

    // },

    setRoomUnAvailable(state, action) {
      state.stateRoomsUnAvailable = action.payload;
      // console.log( action.payload, " In redux")
    },
    
  },
  
  extraReducers: (builder) => {
    

    // All Packet

    builder
    // .addCase(getRoom.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    //   state.stateRooms = action.payload;
    // })

    .addCase(getRoom.pending, (state) => {
      state.isLoading = true;
    })

    .addCase(getRoom.fulfilled, (state, action) => {
      state.stateRooms = action.payload;
      state.isLoading = false;
    })

    .addCase(getRoom.rejected, (state, action) =>{
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload ?? 'Failed to fetch packet';
    })

    //  Packet by Paramss 


  },
});

export const { setRoomUnAvailable } = roomSlice.actions;

export default roomSlice.reducer;
