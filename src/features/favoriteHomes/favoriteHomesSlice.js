import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';
import { API } from '../../app/API';
// Slice Object
///////////////////////////////////////

export const favoriteHomesSlice = createSlice({
  name: "favoriteHomes",
  initialState: [{
    homePlanId: 1,
    name: "The Medita",
    numBeds: 4,
    numBaths: 4,
    sqft: 4300,
    tags: ['master on main', 'patio'],
    description: "The Medita is a spacious model featuring an open floor plan and spacious foyer. You’ll feel like you blend in with your surroundings when you’re at home.\n\nThe plan comes with 3 different layout options on the first floor, and an optional patio addition.",
    image: 'https://storage.googleapis.com/home_plan_images/70660mk_0.jpg',
  },
  {
    homePlanId: 2,
    name: "The Modesto",
    numBeds: 2,
    numBaths: 1,
    sqft: 1800,
    tags: ['cozy space', 'patio'],
    description: "The Modesto is a cozy bungalow model guaranteed to be your happy place.\n\nThe plan comes with 2 different layout options on the first floor, and an optional patio addition.",
    image: 'https://storage.googleapis.com/home_plan_images/28935jj_0.jpg',
  }],
  reducers: {
    addHome: (state, action) => {
      state.push(action.payload);
    },
    removeHome: (state, action) => {
      return state.filter(home => home.homePlanId !== action.payload.homePlanId)
    },
  },
});

export const selectFavoriteHomes = (state) => state.favoriteHomes;

export const selectFilteredFavoriteHomes = (state) => {
  const favoriteHomes = selectFavoriteHomes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteHomes.filter((home) =>
    home.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const {
  addHome,
  removeHome,
} = favoriteHomesSlice.actions;

export const favoriteHomesReducer = favoriteHomesSlice.reducer;