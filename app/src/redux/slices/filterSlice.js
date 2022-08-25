import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catId: 'All',
  sort: '',
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.catId = action.payload;
    },
  },
});
export const { setCategory } = filterSlice.actions;

export default filterSlice.reducer;
