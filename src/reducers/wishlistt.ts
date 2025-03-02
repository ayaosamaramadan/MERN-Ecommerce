import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


export interface WishItem {
   id: number;
   image: string;
    name: string;
    price: number;
    afterdiscount: number;
    quantity?: number;
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
                    const newItem = { ...action.payload, quantity: 1 };
            
                    state.items.push(newItem);
                  }
                  toast.success("Item added to your wishlist");
                  localStorage.setItem("favs", JSON.stringify(state.items));
      },

    },
});


export const {addToWish } = wishSlice.actions;

export default wishSlice.reducer;