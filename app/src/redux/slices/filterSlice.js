import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catId: 'All',
  sort: { name: 'By name Asc', nameProp: 'name' },
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.catId = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});
export const { setCategory, setSort } = filterSlice.actions;

export default filterSlice.reducer;
