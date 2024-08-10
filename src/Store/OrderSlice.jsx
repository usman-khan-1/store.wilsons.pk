import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderDetails: {
    items: [], // Will store cart items
    user_detail: {}, // Will store user form data
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderDetails: (state, action) => {
      state.orderDetails = action.payload;
    },
    setCartItems: (state, action) => {
      state.orderDetails.items = action.payload;
    },
    setUserDetails: (state, action) => {
      state.orderDetails.user_detail = action.payload;
    },
    clearOrderDetails: (state) => {
      state.orderDetails = initialState.orderDetails;
    },
  },
});

export const { setOrderDetails, setCartItems, setUserDetails, clearOrderDetails } = orderSlice.actions;

export default orderSlice.reducer;
