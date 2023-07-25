import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products";
import product from "./slices/product";

export default configureStore({
  reducer: {
    products: products,
    product: product,
  },
});
