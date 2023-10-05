import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  pageCounter: 1,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setPageCounter(state, action) {
      state.pageCounter = action.payload;
    },
  },
});

export const { setCategoryId, setSort, setPageCounter } = filterSlice.actions;

export default filterSlice.reducer;
