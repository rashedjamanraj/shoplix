import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../typs";

interface InitialState {
  cart: ProductType[];
  favorite: ProductType[];
  userInfo: any;
}

const initialState: InitialState = {
  cart: [],
  favorite: [],
  userInfo: null,
};

export const shoplixSlice = createSlice({
  name: "shoplix",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state?.cart?.find(
        (item) => item?.id === action.payload?.id
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state?.cart?.find(
        (item) => item?.id === action.payload,
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const existingProduct = state?.cart?.find(
        (item) => item?.id === action.payload,
      );
      if (existingProduct && existingProduct.quantity! > 1) {
        existingProduct.quantity! -= 1;
      }
    },

    // remove cart
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item?.id !== action.payload);
    },
    resetCart: (state) => {
      state.cart = [];
    },


    // favorite cart
    addToFavorite: (state, action) => {
      const existingProduct = state?.favorite?.find((item) => item?.id === action.payload?.id);
      if (existingProduct) {
        state.favorite = state.favorite.filter((item) => item?.id !== action.payload.id);
      } else {
        state.favorite.push(action.payload);
      }
    },

    removeFromFavorites: (state, action) => {
      state.favorite = state.favorite.filter(
        (item) => item?.id !== action.payload
      );
    },
    resetFavorite: (state) => {
      state.favorite = [];
    },
    
  },
});



export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, resetCart, addToFavorite, removeFromFavorites, resetFavorite } =
  shoplixSlice.actions;
export default shoplixSlice.reducer;
