import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "./http";
import {
  deleteselectedproductUrl,
  getproductUrl,
  getselectedproductUrl,
} from "./url";

export const fetchData = createAsyncThunk(
  "fetchProduct",
  async (_, ThunkApi) => {
    try {
      const res = await http.doGet(`${getproductUrl}`);
      return res.data;
    } catch (error) {
      return ThunkApi.rejectWithValue(error);
    }
  }
);

export const fetchSelectedData = createAsyncThunk(
  "selectedProduct",
  async (i, ThunkApi) => {
    try {
      const res = await http.doGet(getselectedproductUrl.replace("<type>", i));
      return res.data;
    } catch (error) {
      return ThunkApi.rejectWithValue(error);
    }
  }
);

export const deleteProduct = createAsyncThunk("delete", async (i, ThunkApi) => {
  try {
    const res = await http.doDelete(
      deleteselectedproductUrl.replace("<type>", i)
    );
    if (res.status === 200) {
      ThunkApi.dispatch(fetchData());
    }
    return res.data;
  } catch (error) {
    return ThunkApi.rejectWithValue(error);
  }
});
export const sendPostProduct = createAsyncThunk(
  "add",
  async (payload, ThunkApi) => {
    try {
      const res = await http.doPost(getproductUrl, payload);
      if (res.status === 200) {
        ThunkApi.dispatch(fetchData());
      }
      return await res.data;
    } catch (error) {
      return ThunkApi.rejectWithValue(error);
    }
  }
);
