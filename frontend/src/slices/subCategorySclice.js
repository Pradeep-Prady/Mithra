import { createSlice } from "@reduxjs/toolkit";

const subCategorySlice = createSlice({
  name: "subCategory",
  initialState: {
    loading: false,
    category: {},
    subCategories: [],
    isSubCategoryCreated: false,
    isSubCategoryDeleted: false,
    isSubCategoryUpdated: false,
  },
  reducers: {
    clearError(state, action) {
      return { ...state, error: null };
    },

    // New Category
    createSubCategoryRequest(state, action) {
      return { ...state, loading: true };
    },

    createSubCategorySuccess(state, action) {
      return {
        ...state,
        loading: false,
        category: action.payload.category,
        isSubCategoryCreated: true,
      };
    },
    createSubCategoryFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isSubCategoryCreated: false,
      };
    },

    clearSubCategoryCreated(state, action) {
      return {
        ...state,
        isSubCategoryCreated: false,
      };
    },

    // Get ALl Category
    getAllSubCategoryRequest(state, action) {
      return { ...state, loading: true };
    },
    getAllSubCategorySuccess(state, action) {
      return {
        ...state,
        loading: false,
        subCategories: action.payload.subCategories,
        name: action.payload.name
      };
    },
    getAllSubCategoryFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    // Get Single Category

    getSubCategoryRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },

    getSubCategorySuccess(state, action) {
      return {
        ...state,
        loading: false,
        subCategory: action.payload.subCategory,
      };
    },
    getSubCategoryFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    // Update Category
    updateSubCategoryRequest(state, action) {
      return { ...state, loading: true };
    },
    updateSubCategorySuccess(state, action) {
      return {
        ...state,
        loading: false,
        subCategory: action.payload.subCategory,
        isSubCategoryUpdated: true,
      };
    },
    updateSubCategoryFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isSubCategoryUpdated: false,
      };
    },

    clearSubCategoryUpdated(state, action) {
      return {
        ...state,
        isSubCategoryUpdated: false,
      };
    },

    // Delete Category
    deleteSubCategoryRequest(state, action) {
      return { ...state, loading: true };
    },
    deleteSubCategorySuccess(state, action) {
      return {
        ...state,
        loading: false,
        subCategory: action.payload.subCategory,
        isSubCategoryDeleted: true,
      };
    },
    deleteSubCategoryFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isSubCategoryDeleted: false,
      };
    },

    clearSubCategoryDeleted(state, action) {
      return {
        ...state,
        isSubCategoryDeleted: false,
      };
    },
  },
});

const { actions, reducer } = subCategorySlice;

export const {
  clearError,
  createSubCategoryRequest,
  createSubCategorySuccess,
  createSubCategoryFailure,
  clearSubCategoryCreated,
  getAllSubCategoryRequest,
  getAllSubCategorySuccess,
  getAllSubCategoryFailure,
  getSubCategoryRequest,
  getSubCategorySuccess,
  getSubCategoryFailure,
  updateSubCategoryRequest,
  updateSubCategorySuccess,
  updateSubCategoryFailure,
  clearSubCategoryUpdated,
  deleteSubCategoryRequest,
  deleteSubCategorySuccess,
  deleteSubCategoryFailure,
  clearSubCategoryDeleted,
} = actions;

export default reducer;
