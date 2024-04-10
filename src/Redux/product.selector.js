import { createSelector } from "@reduxjs/toolkit";
const selectProducts = (state) => state.products;
export const getProducts = createSelector(
  selectProducts,
  (subState) => subState.response
);
