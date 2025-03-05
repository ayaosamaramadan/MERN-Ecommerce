import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import cartReducer from "./reducers/cart";
import wishReducer from "./reducers/wishlistt";
import author from "./reducers/auth";

const store = configureStore({
  reducer: {
    cartt: cartReducer,
    wish: wishReducer,
    auth: author,
    // [productApi.reducerPath]: productApi.reducer,
    
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;