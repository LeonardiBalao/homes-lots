import { configureStore } from '@reduxjs/toolkit';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice';
import { favoriteHomesReducer } from '../features/favoriteHomes/favoriteHomesSlice';
import { allHomesReducer } from '../features/allHomes/allHomesSlice';

export const store = configureStore({
  reducer: {
    searchTerm: searchTermReducer,
    favoriteHomes: favoriteHomesReducer,
    allHomes: allHomesReducer
  },
});
