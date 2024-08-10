import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import brandingReducer from "./BrandingSlice";
import userReducer from "./UserSlice";
import cartReducer from "./CartSlice";
import wishlistReducer from "./WishlistSlice";
import orderReducer from "./OrderSlice";

const rootReducer = combineReducers({
    branding: brandingReducer,
    user: userReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    order: orderReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable checks
    }),
});

export const persistor = persistStore(store);
