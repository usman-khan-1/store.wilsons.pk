import { configureStore, combineReducers } from "@reduxjs/toolkit";

import brandingReducer from "./BrandingSlice";

export const rootReducer = combineReducers({
    branding: brandingReducer
})

export const store = configureStore({
  reducer: rootReducer
});
