import { configureStore, combineReducers } from "@reduxjs/toolkit";

import brandingReducer from "./BrandingSlice";
import UserSlice from "./UserSlice";

export const rootReducer = combineReducers({
    branding: brandingReducer,
    user: UserSlice,
})

export const store = configureStore({
  reducer: rootReducer
});
