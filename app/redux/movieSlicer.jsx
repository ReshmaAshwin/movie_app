import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovie = createAsyncThunk(
  "fetchMovie",
  async ({ query, page }) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=e13ceb01cda9475783d91f5f870080fe&query=${query}&page=${page}&certification=PG-13`
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Failed to fetch movies");
    }

    return response.json();
  }
);

export const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    isLoading: false,
    data: null,
    error: false,
    currentPage: 1,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovie.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMovie.rejected, (state, action) => {
      state.error = true;
    });
  },
 
});

export default movieSlice.reducer;
