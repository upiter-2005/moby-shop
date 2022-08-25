import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('product/fetchProductStatus', async (url) => {
  const data = await fetch(url)
    .then((data) => data.json())
    .then((data) => data);
  return data;
});
const initialState = {
  items: [],
  status: 'loading',
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = 'error';
    });
  },
});

//export const { increment, decrement, incrementByAmount } = productSlice.actions;

export default productSlice.reducer;
