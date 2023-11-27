import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../utils/constants";
import { trendingMovies } from "../../utils/constants";

export interface MoviesState {
  allMovies: [];
}

const initialState = {
  allMovies: trendingMovies,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Movie>) => {
      state.allMovies = state.allMovies.map((movie) =>
        movie.id === action.payload.id ? { ...movie, isLiked: true } : movie
      );
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.allMovies = state.allMovies.map((movie) =>
        movie.id === action.payload ? { ...movie, isLiked: false } : movie
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = moviesSlice.actions;
export default moviesSlice.reducer;
