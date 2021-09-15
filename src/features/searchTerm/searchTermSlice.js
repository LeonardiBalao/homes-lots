import { createSlice } from '@reduxjs/toolkit';

export const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState: '',
  reducers: {
    setSearchTerm: (state, action) => {
      state += action.payload
    },
    clearSearchTerm: (state, action) => {
      state = "";
    },
  },
});

export const selectSearchTerm = (state) => state.searchTerm;

export const {
  setSearchTerm,
  clearSearchTerm
} = searchTermSlice.actions;

export const searchTermReducer = searchTermSlice.reducer;