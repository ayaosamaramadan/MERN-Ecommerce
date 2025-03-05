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
  itemCount: number;
}

const initialState: WishState = {
  items: [],
  userEmail: localStorage.getItem("userEmail"),
  itemCount: 0,
};

const wishSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setUserWish: (state, action: PayloadAction<string>) => {
      state.userEmail = action.payload;
      const storedItems = localStorage.getItem(`wishlist_${state.userEmail}`);
      const backupItems = localStorage.getItem(
        `wishlist_${state.userEmail}_backup`
      );
      state.items = storedItems
        ? JSON.parse(storedItems)
        : backupItems
        ? JSON.parse(backupItems)
        : [];
      state.itemCount = state.items.length;
    },
    addToWish: (state, action) => {
      if (!state.userEmail) {
        toast.error("Please log in to add items to your wishlist");
        return;
      }
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        return;
      } else {
        const newItem = {
          ...action.payload,
          quantity: 1,
          isLove: true,
          userEmail: state.userEmail,
        };
        state.items.push(newItem);
      }
      state.itemCount = state.items.length;
      toast.success("Item added to your wishlist");
      localStorage.setItem(
        `wishlist_${state.userEmail}`,
        JSON.stringify(state.items)
      );
    },
    removeFromWish: (state, action) => {
      if (!state.userEmail) {
        toast.error("Please log in to remove items from your wishlist");
        return;
      }
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.items[index].isLove = false;
        state.items.splice(index, 1);
      }
      state.itemCount = state.items.length;
      toast.error("Item removed from your wishlist");
      localStorage.setItem(
        `wishlist_${state.userEmail}`,
        JSON.stringify(state.items)
      );
    },
  },
});

export const { addToWish, removeFromWish, setUserWish } = wishSlice.actions;
export default wishSlice.reducer;
