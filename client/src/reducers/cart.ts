import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  afterdiscount: number;
  quantity: number;
  stars: number;
  userEmail: string;
}

interface CartState {
  items: CartItem[];
  status: string | null;
  userEmail: string | null;
  itemCount: number;
}

const initialState: CartState = {
  items: [],
  status: null,
  userEmail: localStorage.getItem("userEmail"),
  itemCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setUserCart: (state, action: PayloadAction<string>) => {
      state.userEmail = action.payload;
      const storedItems = localStorage.getItem(`cartitem_${state.userEmail}`);
      const backupItems = localStorage.getItem(
        `cartitem_${state.userEmail}_backup`
      );
      state.items = storedItems
        ? JSON.parse(storedItems)
        : backupItems
        ? JSON.parse(backupItems)
        : [];
      state.itemCount = state.items.reduce(
        (count, item) => count + item.quantity,
        0
      );
    },
    addToCart: (state, action) => {
      if (!state.userEmail) {
        toast.error("Please log in to add items to your cart");
        return;
      }
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.items[index].quantity++;
      } else {
        const newItem = {
          ...action.payload,
          quantity: 1,
          userEmail: state.userEmail,
        };
        state.items.push(newItem);
      }
      state.itemCount = state.items.reduce(
        (count, item) => count + item.quantity,
        0
      );
      toast.success("Item added to cart");
      localStorage.setItem(
        `cartitem_${state.userEmail}`,
        JSON.stringify(state.items)
      );
    },
    inctoCart: (state, action) => {
      if (!state.userEmail) {
        toast.error("Please log in to add items to your cart");
        return;
      }
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.items[index].quantity++;
      } else {
        const newItem = {
          ...action.payload,
          quantity: 1,
          userEmail: state.userEmail,
        };
        state.items.push(newItem);
      }
      state.itemCount = state.items.reduce(
        (count, item) => count + item.quantity,
        0
      );
      localStorage.setItem(
        `cartitem_${state.userEmail}`,
        JSON.stringify(state.items)
      );
    },
    decFromCart: (state, action) => {
      if (!state.userEmail) {
        toast.error("Please log in to remove items from your cart");
        return;
      }
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index >= 0) {
        state.items[index].quantity--;
        if (state.items[index].quantity === 0) {
          state.items.splice(index, 1);
        }
      }
      state.itemCount = state.items.reduce(
        (count, item) => count + item.quantity,
        0
      );
      localStorage.setItem(
        `cartitem_${state.userEmail}`,
        JSON.stringify(state.items)
      );
    },
  },
});

export const { addToCart, decFromCart, inctoCart, setUserCart } =
  cartSlice.actions;
export default cartSlice.reducer;
