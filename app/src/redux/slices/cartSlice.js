import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  count: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items = [...state.items, { ...action.payload, count: 1 }];
      }
      state.count = state.items.length;
      state.total = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    plusCart: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count++;
      }
      state.total = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusCart: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
      state.total = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    removeFromCart: (state, action) => {
      const newCart = state.items.filter((obj) => obj.id !== action.payload);
      state.items = newCart;
      state.count = state.items.length;
      state.total = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
  },
});
export const { addCart, removeFromCart, plusCart, minusCart } = cartSlice.actions;

export default cartSlice.reducer;
