import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

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
  loading: boolean;
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
  loading: false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values: RegisterValues, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://ecommerce-server-seven-beta.vercel.app/api/users/register",
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
        "https://ecommerce-server-seven-beta.vercel.app/api/users/login",
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
        loading: false,
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
        loading: true,
      };
    },
    registerUserFailure: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
        loading: false,
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
        loading: true,
      };
    },
    loginUserFailure: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
        loading: false,
      };
    },
    updateUserName: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        name: action.payload,
      };
    },
    updateUserEmail: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        email: action.payload,
      };
    },
    updateUserPass: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        password: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      return { ...state, registerStatus: "pending", loading: true };
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
          loading: false,
        };
      } else return state;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload as string,
        loading: false,
      };
    });
    builder.addCase(loginUser.pending, (state) => {
      return { ...state, loginStatus: "pending", loading: true };
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
          loading: false,
        };
      } else return state;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload as string,
        loading: false,
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
  updateUserName,
  updateUserEmail,
  updateUserPass,
} = authSlice.actions;

export default authSlice.reducer;
