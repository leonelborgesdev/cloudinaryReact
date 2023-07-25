import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

export const productsSlice = createSlice({
  name: "products",
  initialState: { list: [] },
  reducers: {
    setProducsList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setProducsList } = productsSlice.actions;

export default productsSlice.reducer;

export const fetchAllProducts = () => {
  return async function (dispatch) {
    const response = await fetch(`${api}/products`);
    if (response) {
      const data = await response.json();
      console.log(data);
      dispatch(setProducsList(data));
    }
  };
};
