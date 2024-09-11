import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existItem = state.cartItems.find((x) => x.uid === product.uid);

      if (existItem) {
        // Update quantity to the new amount
        existItem.quantity = quantity;
      } else {
        state.cartItems.push({ ...product, quantity });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.uid !== action.payload.id
      );
    },
    clearCart: (state) => {
      state.cartItems = initialState.cartItems;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
