import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",

  initialState: {
    loading: false,
    category: {},
    categories: [],
    isCategoryCreated: false,
    isCategoryDeleted: false,
    isCategoryUpdated: false,
  },

  reducers: {
    clearError(state, action) {
      return { ...state, error: null };
    },

    // New Category
    createCategoryRequest(state, action) {
      return { ...state, loading: true };
    },

    createCategorySuccess(state, action) {
      return {
        ...state,
        loading: false,
        category: action.payload.category,
        isCategoryCreated: true,
      };
    },

    createCategoryFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isCategoryCreated: false,
      };
    },

    clearCategoryCreated(state, action) {
      return {
        ...state,
        isCategoryCreated: false,
      };
    },

    // Get ALl Category
    getAllCategoryRequest(state, action) {
      return { ...state, loading: true };
    },
    getAllCategorySuccess(state, action) {
      return {
        ...state,
        loading: false,
        categories: action.payload.categories,
      };
    },
    getAllCategoryFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    // Get Single Category

    getCategoryRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },

    getCategorySuccess(state, action) {
      return {
        ...state,
        loading: false,
        category: action.payload.category,
      };
    },
    getCategoryFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    // Update Category
    updateCategoryRequest(state, action) {
      return { ...state, loading: true };
    },
    updateCategorySuccess(state, action) {
      return {
        ...state,
        loading: false,
        category: action.payload.category,
        isCategoryUpdated: true,
      };
    },
    updateCategoryFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isCategoryUpdated: false,
      };
    },

    clearCategoryUpdated(state, action) {
      return {
        ...state,
        isCategoryUpdated: false,
      };
    },

    // Delete Category
    deleteCategoryRequest(state, action) {
      return { ...state, loading: true };
    },
    deleteCategorySuccess(state, action) {
      return {
        ...state,
        loading: false,
        category: action.payload.category,
        isCategoryDeleted: true,
      };
    },
    deleteCategoryFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isCategoryDeleted: false,
      };
    },

    clearCategoryDeleted(state, action) {
      return {
        ...state,
        isCategoryDeleted: false,
      };
    },



      // Get ALl Categories for Navbar
      getAllCategoryForNavRequest(state, action) {
        return { ...state, loading: true };
      },
      getAllCategoryForNavSuccess(state, action) {
        return {
          ...state,
          loading: false,
          categoriesForNav: action.payload.data,
        };
      },
      getAllCategoryForNavFailure(state, action) {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      },
  
  },
});

const { actions, reducer } = categorySlice;

export const {
  clearError,
  createCategoryRequest,
  createCategorySuccess,
  createCategoryFailure,
  clearCategoryCreated,
  getAllCategoryRequest,
  getAllCategorySuccess,
  getAllCategoryFailure,
  getCategoryRequest,
  getCategorySuccess,
  getCategoryFailure,
  updateCategoryRequest,
  updateCategorySuccess,
  updateCategoryFailure,
  clearCategoryUpdated,
  deleteCategoryRequest,
  deleteCategorySuccess,
  deleteCategoryFailure,
  clearCategoryDeleted,

  getAllCategoryForNavRequest,
  getAllCategoryForNavSuccess,
  getAllCategoryForNavFailure,
} = actions;

export default reducer;
