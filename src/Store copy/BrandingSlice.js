import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: null };

const BrandingSlice = createSlice({
  name: "Branding",
  initialState,

  reducers: {
    setBranding: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setBranding} = BrandingSlice.actions

export default BrandingSlice.reducer;

