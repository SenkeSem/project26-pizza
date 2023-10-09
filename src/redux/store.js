import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../redux/slices/filterSlice.js';
import cartSlice from './slices/cartSlice.js';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
  },
});
