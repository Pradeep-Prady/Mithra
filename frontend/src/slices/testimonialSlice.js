import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "testimonial",

  initialState: {
    loading: false,
    testimonial: {},
    isTestimonialCreated: false,
    isTestimonialDeleted: false,
    isTestimonialUpdated: false,
  },

  reducers: {
    clearError(state, action) {
      return { ...state, error: null };
    },

    // New Category
    createTestimonialRequest(state, action) {
      return { ...state, loading: true };
    },

    createTestimonialSuccess(state, action) {
      return {
        ...state,
        loading: false,
        testimonial: action.payload.testimonial,
        isTestimonialCreated: true,
      };
    },

    createTestimonialFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isTestimonialCreated: false,
      };
    },

    clearTestimonialCreated(state, action) {
      return {
        ...state,
        isTestimonialCreated: false,
      };
    },

    // Get ALl Testimonial
    getAllTestimonialRequest(state, action) {
      return { ...state, loading: true };
    },
    getAllTestimonialSuccess(state, action) {
      return {
        ...state,
        loading: false,
        testimonials: action.payload.testimonials,
      };
    },
    getAllTestimonialFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    // Get Single Category

    getTestimonialRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },

    getTestimonialSuccess(state, action) {
      return {
        ...state,
        loading: false,
        testimonial: action.payload.testimonial,
      };
    },
    getTestimonialFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    // Update Testimonial
    updateTestimonialRequest(state, action) {
      return { ...state, loading: true };
    },
    updateTestimonialSuccess(state, action) {
      return {
        ...state,
        loading: false,
        testimonial: action.payload.testimonial,
        isTestimonialUpdated: true,
      };
    },
    updateTestimonialyFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isTestimonialUpdated: false,
      };
    },

    clearTestimonialUpdated(state, action) {
      return {
        ...state,
        isTestimonialUpdated: false,
      };
    },

    // Delete Testimonial
    deleteTestimonialRequest(state, action) {
      return { ...state, loading: true };
    },
    deleteTestimonialSuccess(state, action) {
      return {
        ...state,
        loading: false,
        testimonial: action.payload.testimonial,
        isTestimonialDeleted: true,
      };
    },
    deleteTestimonialFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isTestimonialDeleted: false,
      };
    },

    clearTestimonialDeleted(state, action) {
      return {
        ...state,
        isTestimonialDeleted: false,
      };
    },
  },
});

const { actions, reducer } = categorySlice;

export const {
  clearError,

  createTestimonialRequest,
  createTestimonialSuccess,
  createTestimonialFailure,
  clearTestimonialCreated,

  getAllTestimonialRequest,
  getAllTestimonialSuccess,
  getAllTestimonialFailure,

  getTestimonialRequest,
  getTestimonialSuccess,
  getTestimonialFailure,
  updateTestimonialRequest,
  updateTestimonialSuccess,
  updateTestimonialyFailure,
  clearTestimonialUpdated,

  deleteTestimonialRequest,
  deleteTestimonialSuccess,
  deleteTestimonialFailure,
  clearTestimonialDeleted,
} = actions;

export default reducer;
