import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../utils/constants";
import { trendingMovies } from "../../utils/constants";

export interface MoviesState {
  allMovies: [];
  favoriteMovies: [];
}

const initialState = {
  allMovies : trendingMovies,
  favoriteMovies : trendingMovies,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Movie>) => {
      state.favoriteMovies.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.favoriteMovies = state.favoriteMovies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = moviesSlice.actions;
export default moviesSlice.reducer;
