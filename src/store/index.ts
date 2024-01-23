import { configureStore } from "@reduxjs/toolkit";
import cookieSlice from "./cookie/cookieSlice";

export const store = configureStore({
  reducer: {
    cookie: cookieSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
