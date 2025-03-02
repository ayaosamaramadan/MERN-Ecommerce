import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export interface CartItem {
 
  id: number;
  name: string;
  image: string;
  price: number;
  afterdiscount: number;
  quantity: number;
  stars: number;
  

}

interface CartState {
  items: CartItem[];
  status: string | null;
}

const initialState: CartState = {
  items: localStorage.getItem("cartiteem")
    ? JSON.parse(localStorage.getItem("cartiteem")!)
    : [],
  status: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.items[index].quantity++;
      } else {
        const newItem = { ...action.payload, quantity: 1 };

        state.items.push(newItem);
      }
      toast.success("Item added to cart");
      localStorage.setItem("cartiteem", JSON.stringify(state.items));
    },

    inctoCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.items[index].quantity++;
      } else {
        const newItem = { ...action.payload, quantity: 1 };

        state.items.push(newItem);
      }
      localStorage.setItem("cartiteem", JSON.stringify(state.items));
    },

    decFromCart: (state, action) => {
      const data = localStorage.getItem("cartiteem");

      if (data) {
        const index = state.items.findIndex(
          (item) => item.id === action.payload
        );
        if (index >= 0) {
          state.items[index].quantity--;
          if (state.items[index].quantity === 0) {
            state.items.splice(index, 1);
          }
        }
        localStorage.setItem("cartiteem", JSON.stringify(state.items));
      }
    },
  },
});


export const { addToCart, decFromCart, inctoCart } = cartSlice.actions;
export default cartSlice.reducer;
