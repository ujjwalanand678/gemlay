// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/ConfigBaseUrl";

// read initial token from localStorage (if any)
const tokenFromStorage = typeof window !== "undefined" ? localStorage.getItem("auth_token") : null;

const initialState = {
  token: tokenFromStorage,
  user: tokenFromStorage ? null : null, // we'll fetch if token exists
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Async thunk: fetch profile using token
export const fetchProfile = createAsyncThunk("auth/fetchProfile", async (token, { rejectWithValue }) => {
  try {

    const res = await fetch(`${BASE_URL}/api/auth/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      return rejectWithValue(data.message || "Failed to fetch profile");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    return rejectWithValue(err.message || "Network error");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      if (user) state.user = user;
      // persist token to localStorage
      if (typeof window !== "undefined") {
        if (token) localStorage.setItem("auth_token", token);
        else localStorage.removeItem("auth_token");
      }
    },
    setUser: (state, action) => {
      state.user = action.payload;
      if (typeof window !== "undefined" && state.token) {
        localStorage.setItem("user", JSON.stringify(action.payload));
      }
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.status = "idle";
      if (typeof window !== "undefined") {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("user");
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        // also persist user
        if (typeof window !== "undefined") localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to fetch profile";
      });
  },
});

export const { setCredentials, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
