import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlicer";
import movieDetailsReducer from "./movieDetailsSlicer";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    movieDetails: movieDetailsReducer
  },
});
