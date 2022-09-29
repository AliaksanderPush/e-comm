import React from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../../config/axios.config';
import { NativeBaseProvider } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import {
  refreshTokens,
  upDateUserData,
  upDateTokens,
  usersAuth,
  userTokens,
} from '../../redux';

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector(usersAuth);
  const tokens = useSelector(userTokens);
  //console.log('selector>>', user);
  //console.log('tokens>>', tokens);

  api.defaults.headers.common['Authorization'] = tokens
    ? `Bearer ${tokens.accessToken}`
    : '';
  api.interceptors.request.use(
    config => {
      return config;
    },

    async error => {
      const originalRequest = error.config;
      if (
        error.responce.status === 403 &&
        error.config &&
        !error.config._isRetry
      ) {
        console.log('попали на рефреш');
        originalRequest._isRetry = true;
        try {
          const tokens = await AsyncStorage.getItem('@auth');
          const { refreshToken } = tokens;
          dispatch(refreshTokens(refreshToken));
          return api.request(originalRequest);
        } catch (e) {
          alert('no registration!');
        }
      }
    },
  );

  useEffect(() => {
    const authControl = async () => {
      let data = await AsyncStorage.getItem('@auth');
      if (data) {
        const tokens = JSON.parse(data);
        const { refreshToken, accessToken } = tokens;

        if (!accessToken) {
          console.log('tOken протух!!!');
          dispatch(refreshTokens(refreshToken));
        }
        if (!user && accessToken) {
          dispatch(upDateTokens(tokens));
          dispatch(upDateUserData(accessToken));
        }
      }
    };
    authControl();
  }, [user]);

  return <NativeBaseProvider>{children}</NativeBaseProvider>;
};
