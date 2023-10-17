import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPizzas = createAsyncThunk('pizza/getPizzasStatus', async (params) => {
  const { pageCounter, categoryId, sortType, searchValue } = params;
  const { data } = await axios.get(
    `https://65166a9f09e3260018c9bd8a.mockapi.io/items?page=${pageCounter}&limit=4&${
      categoryId > 0 ? `category=${categoryId}` : ''
    }&sortBy=${sortType.sortProperty}&search=${searchValue}`,
  );

  return data;
});

const initialState = {
  items: [],
  status: '',
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizza(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [getPizzas.pending]: (state) => {
      state.items = [];
      state.status = 'loading';
    },
    [getPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [getPizzas.rejected]: (state) => {
      state.items = [];
      state.status = 'error';
    },
  },
});

export const { setPizza } = pizzaSlice.actions;

export default pizzaSlice.reducer;
