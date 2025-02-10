import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovieDetails = createAsyncThunk(
  "fetchMovieDetails",
  async (id) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=e13ceb01cda9475783d91f5f870080fe&language=en-US`
      
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Failed to fetch movies");
    }

    return response.json();
  }
);

export const movieDetailsSlice = createSlice({
  name: "movieDetailsSlice",
  initialState: {
    isLoading: false,
    data: null,
    error: false,
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovieDetails.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMovieDetails.rejected, (state, action) => {
      state.error = true;
    });
  },
 
});

export default movieDetailsSlice.reducer;
