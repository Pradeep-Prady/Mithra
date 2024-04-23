import axios from "axios";
import {
  createTestimonialFailure,
  createTestimonialRequest,
  createTestimonialSuccess,
  deleteTestimonialFailure,
  deleteTestimonialRequest,
  deleteTestimonialSuccess,
  getAllTestimonialRequest,
  getAllTestimonialSuccess,
  getTestimonialFailure,
  getTestimonialRequest,
  getTestimonialSuccess,
  updateTestimonialRequest,
  updateTestimonialSuccess,
  updateTestimonialyFailure,
} from "../slices/testimonialSlice";
import { getAllCategoryFailure } from "../slices/categorySclice";

export const createTestimonial = (formData) => async (dispatch) => {
  try {
    dispatch(createTestimonialRequest());

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post(
      `/api/v1/admin/create-testimonial`,
      formData,
      config
    );
    dispatch(createTestimonialSuccess(data));
  } catch (err) {
    dispatch(createTestimonialFailure(err?.response?.data?.message));
  }
};

export const getAllTestimonial = () => async (dispatch) => {
  try {
    dispatch(getAllTestimonialRequest());
    const { data } = await axios.get(`/api/v1/admin/testimonials`);
    dispatch(getAllTestimonialSuccess(data));
  } catch (error) {
    dispatch(getAllCategoryFailure(error?.response?.data?.message));
  }
};

export const getTestimonial = (id) => async (dispatch) => {
  try {
    dispatch(getTestimonialRequest());
    const { data } = await axios.get(`/api/v1/admin/testimonial/${id}`);
    dispatch(getTestimonialSuccess(data));
  } catch (error) {
    dispatch(getTestimonialFailure(error?.response?.data?.message));
  }
};

export const updateTestimonial = (formData, id) => async (dispatch) => {
  try {
    dispatch(updateTestimonialRequest());
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.put(
      `/api/v1/admin/testimonial/update/${id}`,
      formData,
      config
    );
    dispatch(updateTestimonialSuccess(data));
  } catch (err) {
    dispatch(updateTestimonialyFailure(err?.response?.data?.message));
  }
};

export const deleteTestimonial = (id) => async (dispatch) => {
  try {
    dispatch(deleteTestimonialRequest());
    await axios.delete(`/api/v1/admin/testimonial/delete/${id}`);
    dispatch(deleteTestimonialSuccess());
  } catch (error) {
    dispatch(deleteTestimonialFailure(error?.response?.data?.message));
  }
};
