import axios from "axios";
import {
  createAwardFailure,
  createAwardRequest,
  createAwardSuccess,
  deleteAwardFailure,
  deleteAwardRequest,
  deleteAwardSuccess,
  getAllAwardFailure,
  getAllAwardRequest,
  getAllAwardSuccess,
  getAwardFailure,
  getAwardRequest,
  getAwardSuccess,
  updateAwardFailure,
  updateAwardRequest,
  updateAwardSuccess,
} from "../slices/awardSlice";

export const createAward = (formData) => async (dispatch) => {
  try {
    dispatch(createAwardRequest());

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.post(
      `/api/v1/admin/create-award`,
      formData,
      config
    );
    dispatch(createAwardSuccess(data));
  } catch (err) {
    dispatch(createAwardFailure(err?.response?.data?.message));
  }
};

export const getAllAward = () => async (dispatch) => {
  try {
    dispatch(getAllAwardRequest());
    const { data } = await axios.get(`/api/v1/admin/awards`);
    dispatch(getAllAwardSuccess(data));
  } catch (error) {
    dispatch(getAllAwardFailure(error?.response?.data?.message));
  }
};

export const getAward = (id) => async (dispatch) => {
  try {
    dispatch(getAwardRequest());
    const { data } = await axios.get(`/api/v1/admin/award/${id}`);
    dispatch(getAwardSuccess(data));
  } catch (error) {
    dispatch(getAwardFailure(error?.response?.data?.message));
  }
};

export const updateAward = (formData, id) => async (dispatch) => {
  try {
    dispatch(updateAwardRequest());
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.put(
      `/api/v1/admin/award/update/${id}`,
      formData,
      config
    );
    dispatch(updateAwardSuccess(data));
  } catch (err) {
    dispatch(updateAwardFailure(err?.response?.data?.message));
  }
};

export const deleteAward = (id) => async (dispatch) => {
  try {
    dispatch(deleteAwardRequest());
    await axios.delete(`/api/v1/admin/award/delete/${id}`);
    dispatch(deleteAwardSuccess());
  } catch (error) {
    dispatch(deleteAwardFailure(error?.response?.data?.message));
  }
};
