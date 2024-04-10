import { createSlice } from "@reduxjs/toolkit";
import {
  deleteProduct,
  fetchData,
  fetchSelectedData,
  sendPostProduct,
} from "./action";
const initialState = {
  loading: false,
  response: [],
  error: null,
};

export const ProductSlice = createSlice({
  name: "fetchProduct",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.error = null;
        state.response = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }),
});
const selectInitialData = {
  loading: false,
  product: {},
  deleteStatus: {},
  error: null,
};

export const SelectedProductSlice = createSlice({
  name: "selectedData",
  initialState: selectInitialData,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchSelectedData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSelectedData.fulfilled, (state, action) => {
        state.error = null;
        state.product = action.payload;
        state.loading = false;
      })
      .addCase(fetchSelectedData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.deleteStatus = action.payload;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }),
});
const postInitialstate = {
  loading: false,
  postData: {},
  error: null,
};
export const postProductSlice = createSlice({
  name: "postData",
  initialState: postInitialstate,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(sendPostProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendPostProduct.fulfilled, (state, action) => {
        state.error = null;
        state.postData = action.payload;
        state.loading = false;
      })
      .addCase(sendPostProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }),
});
