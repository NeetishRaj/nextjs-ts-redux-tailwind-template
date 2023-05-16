import { createAction, createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

export const setAuthState = createAction<boolean>("setAuthState");
// Type for our state
export interface AuthState {
  authState: boolean;
}

// Initial state
const initialState: AuthState = {
  authState: false,
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: (builder) => {
    builder.addCase(setAuthState, (state, { payload }) => {
      state.authState = payload;
    });
  },
});

export const selectAuthState = (state: AppState) => state.auth.authState;

export default authSlice.reducer;
