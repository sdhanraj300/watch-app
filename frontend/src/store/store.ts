import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./reducers/moviesSlice"; // Assuming you have a separate file for your movies reducer

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    // Add other reducers if you have them
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
