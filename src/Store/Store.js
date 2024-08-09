import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default storage (localStorage)

import brandingReducer from "./BrandingSlice";
import UserSlice from "./UserSlice";
import CartReducer from "./CartSlice";

const rootReducer = combineReducers({
    branding: brandingReducer,
    user: UserSlice,
    cart: CartReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
