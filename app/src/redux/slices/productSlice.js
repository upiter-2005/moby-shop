import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsUrl } from "../../apiUrls/api";

export const fetchProducts = createAsyncThunk(
  "product/fetchProductStatus",
  async (params) => {
    const { cat, sortBy, orderBy } = params;
    const query = `${productsUrl}?brand=${cat}&sortBy=${sortBy}&order=${orderBy}`;
    const result = await fetch(query)
      .then((data) => data.json())
      .then((data) => data);

    return result;
  }
);

export const searchProduct = createAsyncThunk(
  "product/searchProduct",
  async (value) => {
    const query = `${productsUrl}?search=${value}`;
    const result = await fetch(query)
      .then((data) => data.json())
      .then((data) => data);

    return result;
  }
);
const initialState = {
  items: [],
  status: "loading",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(searchProduct.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(searchProduct.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });
    builder.addCase(searchProduct.rejected, (state) => {
      state.status = "error";
    });
  },
});

//  export const { increment, decrement, incrementByAmount } = productSlice.actions;

export default productSlice.reducer;
