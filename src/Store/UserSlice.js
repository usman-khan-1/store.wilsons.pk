// src/store/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null,
  },
  reducers: {
    setUserData(state, action) {
      state.value = action.payload;
    },
    clearUserData(state) {
      state.value = null;
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
