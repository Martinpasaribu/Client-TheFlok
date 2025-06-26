import { configureStore } from '@reduxjs/toolkit';
import roomReduce from './slice/roomSlice';
import contactReducer from './slice/contactSlice';
import bookingReducer from './slice/bookingSlice';

const store = configureStore({
  reducer: {
    room : roomReduce,
    contact : contactReducer,
    booking : bookingReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
