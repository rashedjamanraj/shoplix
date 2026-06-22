
import { configureStore } from '@reduxjs/toolkit';
import shoplixReducer from './shoplixSlice';


export const store = configureStore({
  reducer: {
    shoplix: shoplixReducer
  },
  
})

