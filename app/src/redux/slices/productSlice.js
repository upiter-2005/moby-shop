import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productsUrl } from '../../apiUrls/api';

export const fetchProducts = createAsyncThunk('product/fetchProductStatus', async (params) => {
  let { cat } = params;
  if (cat === 'All') {
    cat = '';
  }
  const query = `${productsUrl}?brand=${cat}`;
  const data = await fetch(query)
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
