import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export interface WishItem {
  id: number;
  image: string;
  name: string;
  price: number;
  afterdiscount: number;
  quantity?: number;
  isLove?: boolean;
  userEmail: string;
}

interface WishState {
  items: WishItem[];
  userEmail: string | null;
}

const initialState: WishState = {
  items: [],
  userEmail: null,
};

const wishSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setUserWish: (state, action: PayloadAction<string>) => {
      state.userEmail = action.payload;
      const storedItems = localStorage.getItem(`wishlist_${state.userEmail}`);
      state.items = storedItems ? JSON.parse(storedItems) : [];
    },
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
      if (state.userEmail) {
        localStorage.setItem(
          `wishlist_${state.userEmail}`,
          JSON.stringify(state.items)
        );
      }
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
      if (state.userEmail) {
        localStorage.setItem(
          `wishlist_${state.userEmail}`,
          JSON.stringify(state.items)
        );
      }
    },
  },
});

export const { addToWish, removeFromWish, setUserWish } = wishSlice.actions;
export default wishSlice.reducer;
