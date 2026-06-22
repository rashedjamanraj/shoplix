import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  favorite: [],
  userInfo: null,
}

export const shoplixSlice = createSlice({
  name: "shoplix",
  initialState,
  reducers:{
    addToCart:(state, action) => {
      state.cart = action.payload;
    },
  },
  
});

export const {addToCart} = shoplixSlice.actions;
export default shoplixSlice.reducer;