import axios from "axios";
import {
  createProductFailure,
  createProductRequest,
  createProductSuccess,
  deleteProductFailure,
  deleteProductRequest,
  deleteProductSuccess,
  getAllProductFailure,
  getAllProductRequest,
  getAllProductSuccess,
  getProductFailure,
  getProductRequest,
  getProductSuccess,
  updateProductFailure,
  updateProductRequest,
  updateProductSuccess,
} from "../slices/productSlice";

export const createProduct = (formData) => async (dispatch) => {
  try {
    dispatch(createProductRequest());
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post(
      `/api/v1/admin/create-product`,
      formData,
      config
    );
    dispatch(createProductSuccess(data));
  } catch (err) {
    dispatch(createProductFailure(err?.response?.data?.message));
  }
};

export const getAllProduct = (subCategoryId) => async (dispatch) => {
  try {
    dispatch(getAllProductRequest());

    const { data } = await axios.get(`/api/v1/admin/${subCategoryId}/products`);

    
    dispatch(getAllProductSuccess(data));
  } catch (error) {
    dispatch(getAllProductFailure(error?.response?.data?.message));
  }
};

export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch(getProductRequest());
    const { data } = await axios.get(`/api/v1/admin/product/${id}`);
    dispatch(getProductSuccess(data));
  } catch (error) {
    dispatch(getProductFailure(error?.response?.data?.message));
  }
};

export const updateProduct = (formData, id) => async (dispatch) => {
  try {
    dispatch(updateProductRequest());
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.put(
      `/api/v1/admin/product/update/${id}`,
      formData,

      config
    );
    dispatch(updateProductSuccess(data));
  } catch (err) {
    dispatch(updateProductFailure(err?.response?.data?.message));
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch(deleteProductRequest());
    await axios.delete(`/api/v1/admin/product/delete/${id}`);
    dispatch(deleteProductSuccess());
  } catch (error) {
    dispatch(deleteProductFailure(error?.response?.data?.message));
  }
};
