import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "../store/slices/tokenSlice";

const store = configureStore({
  reducer: {
    token: tokenSlice,
  },
});

export default store;
