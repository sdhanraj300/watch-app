import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Movie {
  id: number;
  // Add other properties based on your actual movie structure
}

interface MoviesState {
  allMovies: Movie[];
  favoriteMovies: Movie[];
}

const initialState: MoviesState = {
  allMovies: [], // Your array of movies
  favoriteMovies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Movie>) => {
      state.favoriteMovies.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<Movie>) => {
      state.favoriteMovies = state.favoriteMovies.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = moviesSlice.actions;
export default moviesSlice.reducer;
