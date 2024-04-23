import {
  clearError,
  loadDashboardFail,
  loadDashboardRequest,
  loadDashboardSuccess,
  loadUserFail,
  loadUserRequest,
  loadUserSuccess,
  loginFail,
  loginRequest,
  loginSuccess,
  logoutFail,
  logoutSuccess,
} from "../slices/authSlice";
import axios from "axios";

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const { data } = await axios.post(`/api/v1/admin/login`, {
      username,
      password,
    });
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFail(error?.response?.data?.message));
  }
};

export const clearAuthError = (dispatch) => {
  dispatch(clearError());
};

export const loadUser = () => {
  return async (dispatch) => {
    try {
      dispatch(loadUserRequest());
      const { data } = await axios.get(`/api/v1/admin/me`);
      dispatch(loadUserSuccess(data));
    } catch (error) {
      dispatch(loadUserFail(error?.response?.data?.message));
    }
  };
};
export const logout = async (dispatch) => {
  try {
    await axios.get(`/api/v1/admin/logout`);
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFail(error.response.data.message));
  }
};

export const getDashboard = () => {
  return async (dispatch) => {
    try {
      dispatch(loadDashboardRequest());
      const { data } = await axios.get(`/api/v1/admin/dashboard`);
      dispatch(loadDashboardSuccess(data));
    } catch (error) {
      dispatch(loadDashboardFail(error?.response?.data?.message));
    }
  };
};
