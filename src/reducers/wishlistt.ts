import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export interface WishItem {
  id: number;
  image: string;
  name: string;
  price: number;
  afterdiscount: number;
  quantity?: number;
  isLove?: boolean;
}

interface WishState {
  items: WishItem[];
}

const initialState: WishState = {
  items: localStorage.getItem("favs")
    ? JSON.parse(localStorage.getItem("favs")!)
    : [],
};

const wishSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToWish: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        return;
      } else {
        const newItem = { ...action.payload, quantity: 1, isLove: true };
        state.items.push(newItem);
      }
      toast.success("Item added to your wishlist");
      localStorage.setItem("favs", JSON.stringify(state.items));
    },

    removeFromWish: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.items[index].isLove = false;
        state.items.splice(index, 1);
      }
      toast.error("Item removed from your wishlist");
      localStorage.setItem("favs", JSON.stringify(state.items));
    },
  },
});

export const { addToWish, removeFromWish } = wishSlice.actions;

export default wishSlice.reducer;
