import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import productDataInitialState, { Card, Product } from "./type";

const productDataSlice = createSlice({
  name: "productData",
  initialState: productDataInitialState,
  reducers: {
    setAvailableProducts: (state, { payload }: PayloadAction<Product[]>) => {
      state.products = payload;
    },
    setSelectedProduct: (state, { payload }: PayloadAction<Card>) => {
      state.selectedProduct = payload;
    },
    setTotalPrice: (state, { payload }: PayloadAction<number>) => {
      state.totalPrice = payload;
    },
  },
});

export const { setAvailableProducts, setSelectedProduct, setTotalPrice } =
  productDataSlice.actions;

export { productDataSlice };
