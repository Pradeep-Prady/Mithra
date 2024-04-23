import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "award",

  initialState: {
    loading: false,
    award: {},
    isAwardCreated: false,
    isAwardDeleted: false,
    isAwardUpdated: false,
  },

  reducers: {
    clearError(state, action) {
      return { ...state, error: null };
    },

    // New Category
    createAwardRequest(state, action) {
      return { ...state, loading: true };
    },

    createAwardSuccess(state, action) {
      return {
        ...state,
        loading: false,
        award: action.payload.award,
        isAwardCreated: true,
      };
    },

    createAwardFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAwardCreated: false,
      };
    },

    clearAwardCreated(state, action) {
      return {
        ...state,
        isAwardCreated: false,
      };
    },

    // Get ALl Category
    getAllAwardRequest(state, action) {
      return { ...state, loading: true };
    },
    getAllAwardSuccess(state, action) {
      return {
        ...state,
        loading: false,
        awards: action.payload.awards,
      };
    },
    getAllAwardFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    // Get Single Category

    getAwardRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },

    getAwardSuccess(state, action) {
      return {
        ...state,
        loading: false,
        award: action.payload.award,
      };
    },
    getAwardFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    // Update Category
    updateAwardRequest(state, action) {
      return { ...state, loading: true };
    },
    updateAwardSuccess(state, action) {
      return {
        ...state,
        loading: false,
        award: action.payload.award,
        isAwardUpdated: true,
      };
    },
    updateAwardFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAwardUpdated: false,
      };
    },

    clearAwardUpdated(state, action) {
      return {
        ...state,
        isAwardUpdated: false,
      };
    },

    // Delete Category
    deleteAwardRequest(state, action) {
      return { ...state, loading: true };
    },
    deleteAwardSuccess(state, action) {
      return {
        ...state,
        loading: false,
        award: action.payload.award,
        isAwardDeleted: true,
      };
    },
    deleteAwardFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAwardDeleted: false,
      };
    },

    clearAwardDeleted(state, action) {
      return {
        ...state,
        isAwardDeleted: false,
      };
    },
  },
});

const { actions, reducer } = categorySlice;

export const {
  clearError,

  createAwardRequest,
  createAwardSuccess,
  createAwardFailure,
  clearAwardCreated,
  getAllAwardRequest,

  getAllAwardSuccess,
  getAllAwardFailure,
  getAwardRequest,
  getAwardSuccess,
  getAwardFailure,
  updateAwardRequest,
  updateAwardSuccess,
  updateAwardFailure,

  clearAwardUpdated,
  deleteAwardRequest,
  deleteAwardSuccess,
  deleteAwardFailure,
  clearAwardDeleted,
} = actions;

export default reducer;
