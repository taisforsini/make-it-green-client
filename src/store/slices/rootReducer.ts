import { combineReducers } from "@reduxjs/toolkit";
import { productStore } from "./productStore";
import { userStore } from "./userStore";

export default combineReducers({
  productStore: productStore.productDataSlice.reducer,
  userStore: userStore.userDataSlice.reducer,
});
