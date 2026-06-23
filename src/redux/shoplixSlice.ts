import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../typs";

interface InitialState {
  cart: ProductType[],
  favorite:ProductType[],
  userInfo: any,
}

const initialState: InitialState = {
  cart: [],
  favorite: [],
  userInfo: null,
}

export const shoplixSlice = createSlice({
  name: "shoplix",
  initialState,
  reducers:{
    addToCart:(state, action) => {
      const existingProduct = state?.cart?.find(
        (item) => item?.id === action.payload?.id
      )
      if(existingProduct) {
        existingProduct.quantity! += 1;
      } else {
        state.cart.push({...action.payload, quantity: 1});
      }
      
    },
  },
  
});

export const {addToCart} = shoplixSlice.actions;
export default shoplixSlice.reducer;