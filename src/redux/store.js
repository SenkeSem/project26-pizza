import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/slices/filterSlice.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
