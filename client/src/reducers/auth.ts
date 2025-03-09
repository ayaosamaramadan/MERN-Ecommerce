import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

interface RegisterValues {
  name: string;
  email: string;
  password: string;
}

interface LoginValues {
  email: string;
  password: string;
}

interface AuthState {
  token: string | null;
  name: string;
  email: string;
  _id: string;
  registerStatus: string;
  registerError: string;
  loginStatus: string;
  loginError: string;
  userLoaded: boolean;
}

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  name: "",
  email: "",
  _id: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values: RegisterValues, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://ecommerce-server-coral-mu.vercel.app/api/users/register", // Update this URL to your deployed backend URL
        {
          name: values.name,
          email: values.email,
          password: values.password,
        }
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userEmail", values.email);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue("An unknown error occurred");
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values: LoginValues, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://ecommerce-server-coral-mu.vercel.app/api/users/login", // Update this URL to your deployed backend URL
        {
          email: values.email,
          password: values.password,
        }
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userEmail", values.email);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue("An unknown error occurred");
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser: (state) => {
      const token = state.token;
      if (token) {
        const user: { name: string; email: string; _id: string } =
          jwtDecode(token);
        return {
          ...state,
          name: user.name,
          email: user.email,
          _id: user._id,
          userLoaded: true,
        };
      } else {
        return {
          ...state,
          userLoaded: true,
        };
      }
    },
    logoutUser: (state) => {
      const userEmail = state.email;
      if (userEmail) {
        const cartItems = localStorage.getItem(`cartitem_${userEmail}`);
        const wishItems = localStorage.getItem(`wishlist_${userEmail}`);
        localStorage.setItem(`cartitem_${userEmail}_backup`, cartItems || "[]");
        localStorage.setItem(`wishlist_${userEmail}_backup`, wishItems || "[]");
      }
      localStorage.removeItem("token");
      localStorage.removeItem("userEmail");
      return {
        ...state,
        token: null,
        name: "",
        email: "",
        _id: "",
        userLoaded: false,
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
      };
    },
    registerUserSuccess: (state, action: PayloadAction<{ token: string }>) => {
      const user: { name: string; email: string; _id: string } = jwtDecode(
        action.payload.token
      );
      return {
        ...state,
        token: action.payload.token,
        name: user.name,
        email: user.email,
        _id: user._id,
        registerStatus: "success",
      };
    },
    registerUserFailure: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
      };
    },
    loginUserSuccess: (state, action: PayloadAction<{ token: string }>) => {
      const user: { name: string; email: string; _id: string } = jwtDecode(
        action.payload.token
      );
      return {
        ...state,
        token: action.payload.token,
        name: user.name,
        email: user.email,
        _id: user._id,
        loginStatus: "success",
      };
    },
    loginUserFailure: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user: { name: string; email: string; _id: string } = jwtDecode(
          action.payload.token
        );
        return {
          ...state,
          token: action.payload.token,
          name: user.name,
          email: user.email,
          _id: user._id,
          registerStatus: "success",
        };
      } else return state;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload as string,
      };
    });
    builder.addCase(loginUser.pending, (state) => {
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user: { name: string; email: string; _id: string } = jwtDecode(
          action.payload.token
        );
        return {
          ...state,
          token: action.payload.token,
          name: user.name,
          email: user.email,
          _id: user._id,
          loginStatus: "success",
        };
      } else return state;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload as string,
      };
    });
  },
});

export const {
  loadUser,
  logoutUser,
  registerUserSuccess,
  registerUserFailure,
  loginUserSuccess,
  loginUserFailure,
} = authSlice.actions;

export default authSlice.reducer;
