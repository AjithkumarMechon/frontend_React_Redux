import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./product.reducer";
const store = configureStore({
  reducer: rootReducer,
});
export default store;
