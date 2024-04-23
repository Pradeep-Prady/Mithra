import axios from "axios";
import {
  createCategoryFailure,
  createCategoryRequest,
  createCategorySuccess,
  deleteCategoryFailure,
  deleteCategoryRequest,
  deleteCategorySuccess,
  getAllCategoryFailure,
  getAllCategoryForNavFailure,
  getAllCategoryForNavRequest,
  getAllCategoryForNavSuccess,
  getAllCategoryRequest,
  getAllCategorySuccess,
  getCategoryFailure,
  getCategoryRequest,
  getCategorySuccess,
  updateCategoryFailure,
  updateCategoryRequest,
  updateCategorySuccess,
} from "../slices/categorySclice";

export const createCategory = (formData) => async (dispatch) => {
  try {
    dispatch(createCategoryRequest());

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post(
      `/api/v1/admin/create-category`,
      formData,
      config
    );
    dispatch(createCategorySuccess(data));
  } catch (err) {
    dispatch(createCategoryFailure(err?.response?.data?.message));
  }
};

export const getAllCategory = () => async (dispatch) => {
  try {
    dispatch(getAllCategoryRequest());
    const { data } = await axios.get(`/api/v1/admin/categories`);
    dispatch(getAllCategorySuccess(data));
  } catch (error) {
    dispatch(getAllCategoryFailure(error?.response?.data?.message));
  }
};

export const getCategory = (id) => async (dispatch) => {
  try {
    dispatch(getCategoryRequest());
    const { data } = await axios.get(`/api/v1/admin/category/${id}`);
    dispatch(getCategorySuccess(data));
  } catch (error) {
    dispatch(getCategoryFailure(error?.response?.data?.message));
  }
};

export const updateCategory = (formData, id) => async (dispatch) => {
  try {
    dispatch(updateCategoryRequest());
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.put(
      `/api/v1/admin/category/update/${id}`,
      formData,
      config
    );
    dispatch(updateCategorySuccess(data));
  } catch (err) {
    dispatch(updateCategoryFailure(err?.response?.data?.message));
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    dispatch(deleteCategoryRequest());
    await axios.delete(`/api/v1/admin/category/delete/${id}`);
    dispatch(deleteCategorySuccess());
  } catch (error) {
    dispatch(deleteCategoryFailure(error?.response?.data?.message));
  }
};


export const getAllCategoryForNav = () => async (dispatch) => {
  try {
    dispatch(getAllCategoryForNavRequest());
    const { data } = await axios.get(`/api/v1/admin/categories/nav`);
    dispatch(getAllCategoryForNavSuccess(data));
  } catch (error) {
    dispatch(getAllCategoryForNavFailure(error?.response?.data?.message));
  }
};