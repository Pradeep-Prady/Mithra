import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    product: {},
    isProductCreated: false,
    isProductDeleted: false,
    isProductUpdated: false,
  },
  reducers: {
    clearError(state, action) {
      return { ...state, error: null };
    },

    // New Category
    createProductRequest(state, action) {
      return { ...state, loading: true };
    },

    createProductSuccess(state, action) {
      return {
        ...state,
        loading: false,
        product: action.payload.product,
        isProductCreated: true,
      };
    },
    createProductFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isProductCreated: false,
      };
    },

    clearProductCreated(state, action) {
      return {
        ...state,
        isProductCreated: false,
      };
    },


    

    // Get ALl Category
    getAllProductRequest(state, action) {
      return { ...state, loading: true };
    },
    getAllProductSuccess(state, action) {
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        name: action.payload.name
      };
    },
    getAllProductFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },








    // Get Single Category

    getProductRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },

    getProductSuccess(state, action) {
      return {
        ...state,
        loading: false,
        product: action.payload.product,

      };
    },
    getProductFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    // Update Category
    updateProductRequest(state, action) {
      return { ...state, loading: true };
    },
    updateProductSuccess(state, action) {
      return {
        ...state,
        loading: false,
        product: action.payload.product,
        isProductUpdated: true,
      };
    },
    updateProductFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isProductUpdated: false,
      };
    },

    clearProductUpdated(state, action) {
      return {
        ...state,
        isProductUpdated: false,
      };
    },

    // Delete Category
    deleteProductRequest(state, action) {
      return { ...state, loading: true };
    },
    deleteProductSuccess(state, action) {
      return {
        ...state,
        loading: false,
        product: action.payload.product,
        isProductDeleted: true,
      };
    },
    deleteProductFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isProductDeleted: false,
      };
    },

    clearProductDeleted(state, action) {
      return {
        ...state,
        isProductDeleted: false,
      };
    },
  },
});

const { actions, reducer } = categorySlice;

export const {
  clearError,

  createProductRequest,
  createProductSuccess,
  createProductFailure,
  clearProductCreated,
  getAllProductRequest,
  getAllProductSuccess,
  getAllProductFailure,
  getProductRequest,
  getProductSuccess,
  getProductFailure,
  updateProductRequest,
  updateProductSuccess,
  updateProductFailure,
  clearProductUpdated,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductFailure,
  clearProductDeleted,
} = actions;

export default reducer;
