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
}

const initialState: CartState = {
  items: [],
  status: null,
  userEmail: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setUserCart: (state, action: PayloadAction<string>) => {
      state.userEmail = action.payload;
      const storedItems = localStorage.getItem(`cartiteem_${state.userEmail}`);
      state.items = storedItems ? JSON.parse(storedItems) : [];
    },
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
      if (state.userEmail) {
        localStorage.setItem(`cartiteem_${state.userEmail}`, JSON.stringify(state.items));
      }
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
      if (state.userEmail) {
        localStorage.setItem(`cartiteem_${state.userEmail}`, JSON.stringify(state.items));
      }
    },
    decFromCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (index >= 0) {
        state.items[index].quantity--;
        if (state.items[index].quantity === 0) {
          state.items.splice(index, 1);
        }
      }
      if (state.userEmail) {
        localStorage.setItem(`cartiteem_${state.userEmail}`, JSON.stringify(state.items));
      }
    },
  },
});

export const { addToCart, decFromCart, inctoCart, setUserCart } = cartSlice.actions;
export default cartSlice.reducer;
