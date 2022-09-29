import { loaderOff, loaderOn, errorOff, errorOn } from './app.action';
import {
  LOAD_USER_SUCCESS,
  SINGOUT_USER,
  UPDATE_TOKENS,
  UPDATE_USER_DATA,
  GET_TOKEN_FOR_RESET_CODE,
  GET_TOKEN_FOR_RESTORE_PASSWORD,
  CLEAR_TOKENS_FOR_RESTORE_PASS,
} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_URL, api } from '../../config/axios.config';

export const fetchUser = user => {
  return async dispatch => {
    try {
      dispatch(loaderOn());
      const { data } = await axios.post(`${API_URL}/auth/login`, user);
      const { accessToken, refreshToken } = data;
      await AsyncStorage.setItem(
        '@auth',
        JSON.stringify({ accessToken, refreshToken }),
      );
      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: data,
      });
      dispatch(loaderOff());
    } catch (err) {
      dispatch(errorOn(err.response.data));
      console.log(err.response.data);
      setTimeout(() => {
        dispatch(errorOff());
      }, 3000);
    }
  };
};

export const refreshTokens = refresh => {
  return async dispatch => {
    try {
      console.log('prishlo v refresh token=>!!!', refresh);
      dispatch(loaderOn());
      const { data } = await axios.post(`${API_URL}/auth/generateNewTokens`, {
        refreshToken: refresh,
      });
      const { accessToken, refreshToken } = data;
      console.log('сработал refresh!!!', data);
      await AsyncStorage.setItem(
        '@auth',
        JSON.stringify({ accessToken, refreshToken }),
      );
      dispatch(upDateTokens(data));
      dispatch(loaderOff());
    } catch (err) {
      dispatch(errorOn(err.response.data));
      console.log(err.response.data);
      dispatch(errorOff());
    }
  };
};

export const upDateUserData = accessToken => {
  return async dispatch => {
    try {
      dispatch(loaderOn());
      const { data } = await axios.get(`${API_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      console.log('update user=>', data.data);

      dispatch({
        type: UPDATE_USER_DATA,
        updUser: data.data,
      });
      console.log('сработал update!!!');
      dispatch(loaderOff());
    } catch (err) {
      dispatch(errorOn(err.response.data));
      console.log('сработал update err!!!');
      console.log(err.response.data);
      dispatch(errorOff());
    }
  };
};

export const fogotPassword = email => {
  return async dispatch => {
    try {
      dispatch(loaderOn());
      const { data } = await axios.post(
        `${API_URL}/auth/forgotPasswordMobile`,
        email,
      );
      dispatch({
        type: GET_TOKEN_FOR_RESET_CODE,
        resetCode: data,
        email,
      });
      dispatch(loaderOff());
    } catch (err) {
      dispatch(errorOn(err.response.data));
      console.log(err.response.data);
    }
  };
};

export const sendResetCode = info => {
  return async dispatch => {
    try {
      dispatch(loaderOn());
      const { token, code } = info;
      const { data } = await axios.post(
        `${API_URL}/auth/sendCode`,
        { code },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      dispatch({
        type: GET_TOKEN_FOR_RESTORE_PASSWORD,
        restorePass: data,
      });
      dispatch(loaderOff());
    } catch (err) {
      dispatch(errorOn(err.response.data));
      console.log(err.response.data);
    }
  };
};

export const changePassword = async info => {
  const { token, newPassword } = info;
  const { data } = await axios.patch(
    `${API_URL}/auth/changePassword`,
    { newPassword },
    { headers: { Authorization: `Bearer ${token}` } },
  );
  return data;
};

export const upDateTokens = data => {
  return {
    type: UPDATE_TOKENS,
    newTokens: data,
  };
};

export const logout = () => {
  return async dispatch => {
    dispatch({
      type: SINGOUT_USER,
    });
    await AsyncStorage.removeItem('@auth');
    dispatch(loaderOff());
  };
};

export const clearUserTokens = () => {
  return {
    type: CLEAR_TOKENS_FOR_RESTORE_PASS,
  };
};
