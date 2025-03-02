import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  afterdiscount: number;
}

interface CartState {
  items: CartItem[];
  status: string | null;
}

const initialState: CartState = {
  items:  localStorage.getItem("cartiteem") ? JSON.parse(localStorage.getItem("cartiteem")!) : [],
  status: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index >= 0) {
        state.items[index].quantity++;
    } else {
        const newItem = { ...action.payload, quantity: 1 };
  
        state.items.push(newItem);
    }
      toast.success("Added to cart");
      localStorage.setItem("cartiteem", JSON.stringify(state.items));
    },
  },
});

 
            
            
        

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
