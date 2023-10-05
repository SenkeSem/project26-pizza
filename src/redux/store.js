import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../redux/slices/filterSlice.js';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
  },
});
