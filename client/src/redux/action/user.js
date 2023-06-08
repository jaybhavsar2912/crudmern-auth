import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
} from '../action-type';

import axios from 'axios';

export const registerUser = (newData) => async (dispatch) => {
  try {
    dispatch({ type: SIGNUP_USER_REQUEST });
    const { data } = await axios.post(`http://localhost:8080/signup`, newData);
    dispatch({ type: SIGNUP_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SIGNUP_USER_FAIL, error: error.message });
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER_REQUEST });
    const { data } = await axios.post(`http://localhost:8080/login`, userData);
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_USER_FAIL, error: error.message });
  }
};
