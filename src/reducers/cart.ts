import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity?: number;
  image: string;
  afterdiscount: number;
}

interface CartState {
  items: CartItem[];
  status: string | null;
}

const initialState: CartState = {
  items: [],
  status: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      toast.success("Added to cart");
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
