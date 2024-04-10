import { combineReducers } from "@reduxjs/toolkit";
import {
  ProductSlice,
  SelectedProductSlice,
  postProductSlice,
} from "./product.slice";
export const rootReducer = combineReducers({
  products: ProductSlice.reducer,
  selectedProduct: SelectedProductSlice.reducer,
  postData: postProductSlice.reducer,
});
