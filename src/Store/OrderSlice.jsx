import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderDetails: {
    product_detail: [], // Will store cart items
    basic_info: {}, // Will store user form data
    payment: {}, // Will store user form data
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
      state.orderDetails.product_detail = action.payload;
    },
    setUserDetails: (state, action) => {
      state.orderDetails.basic_info = action.payload;
    },
    setPaymentDetails: (state, action) => {
      state.orderDetails.payment = action.payload;
    },
    clearOrderDetails: (state) => {
      state.orderDetails = initialState.orderDetails;
    },
  },
});

export const {
  setOrderDetails,
  setCartItems,
  setUserDetails,
  clearOrderDetails,
  setPaymentDetails
} = orderSlice.actions;

export default orderSlice.reducer;
