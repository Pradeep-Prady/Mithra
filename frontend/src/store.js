import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk"; // Import thunk from redux

import productReducer from "./slices/productSlice";
import categoryReducer from "./slices/categorySclice";
import subCategoryReducer from "./slices/subCategorySclice";
import authReducer from "./slices/authSlice";
import testimonialReducer from "./slices/testimonialSlice";
import awardReducer from "./slices/awardSlice";

const reducer = combineReducers({
  productState: productReducer,
  categoryState: categoryReducer,
  subCategoryState: subCategoryReducer,
  authState: authReducer,
  testimonialState: testimonialReducer,
  awardState: awardReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Pass thunk middleware
});

export default store;
