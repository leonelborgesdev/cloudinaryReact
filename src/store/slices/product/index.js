import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

export const productSlice = createSlice({
  name: "product",
  initialState: { obj: {} },
  reducers: {
    setProductObj: (state, action) => {
      state.obj = action.payload;
    },
  },
});

export const { setProductObj } = productSlice.actions;

export default productSlice.reducer;

export const fetchCreateProduct = (product) => {
  return async function () {
    const response = await fetch(`${api}/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (response) {
      await response.json();
    }
  };
};
