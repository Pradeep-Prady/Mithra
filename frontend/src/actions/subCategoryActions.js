import axios from "axios";
import {
  createSubCategoryFailure,
  createSubCategoryRequest,
  createSubCategorySuccess,
  deleteSubCategoryFailure,
  deleteSubCategoryRequest,
  deleteSubCategorySuccess,
  getAllSubCategoryFailure,
  getAllSubCategoryRequest,
  getAllSubCategorySuccess,
  getSubCategoryFailure,
  getSubCategoryRequest,
  getSubCategorySuccess,
  updateSubCategoryFailure,
  updateSubCategoryRequest,
  updateSubCategorySuccess,
} from "../slices/subCategorySclice";

export const createSubCategory = (formData) => async (dispatch) => {
  try {
    dispatch(createSubCategoryRequest());
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post(
      `/api/v1/admin/create-subcategory`,
      formData,
      config
    );
    dispatch(createSubCategorySuccess(data));
  } catch (err) {
    dispatch(createSubCategoryFailure(err?.response?.data?.message));
  }
};

export const getAllSubCategory = (categoryId) => async (dispatch) => {
  try {
    dispatch(getAllSubCategoryRequest());
    const { data } = await axios.get(
      `/api/v1/admin/${categoryId}/subcategories`
    );

    dispatch(getAllSubCategorySuccess(data));
  } catch (error) {
    dispatch(getAllSubCategoryFailure(error?.response?.data?.message));
  }
};

export const getSubCategory = (id) => async (dispatch) => {
  try {
    dispatch(getSubCategoryRequest());
    const { data } = await axios.get(`/api/v1/admin/subcategory/${id}`);
    dispatch(getSubCategorySuccess(data));
  } catch (error) {
    dispatch(getSubCategoryFailure(error?.response?.data?.message));
  }
};

export const updateSubCategory = (formData, id) => async (dispatch) => {
  try {
    dispatch(updateSubCategoryRequest());
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.put(
      `/api/v1/admin/subcategory/update/${id}`,
      formData,
      config
    );
    dispatch(updateSubCategorySuccess(data));
  } catch (err) {
    dispatch(updateSubCategoryFailure(err?.response?.data?.message));
  }
};

export const deleteSubCategory = (id) => async (dispatch) => {
  try {
    dispatch(deleteSubCategoryRequest());
    await axios.delete(`/api/v1/admin/subcategory/delete/${id}`);
    dispatch(deleteSubCategorySuccess());
  } catch (error) {
    dispatch(deleteSubCategoryFailure(error?.response?.data?.message));
  }
};
