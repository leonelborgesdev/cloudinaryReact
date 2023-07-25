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
    const formData = new FormData();

    for (const property in product) {
      formData.append(property, product[property]);
    }
    console.log("formData", formData);
    const response = await fetch(`${api}/products`, {
      method: "POST",
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      body: formData,
    });
    if (response) {
      const data = await response.json();
      console.log(data);
    }
  };
};
