import { api } from '../../config/axios.config';
import { loaderOff, loaderOn, errorOff, errorOn } from './app.action';
import { LOAD_NEWS, GET_NEWS_BY_ID } from '../types';

export const fetchNews = info => {
  const { limit, page } = info;
  return async dispatch => {
    try {
      dispatch(loaderOn());
      const { data } = await api.get(`/posts?page=${page}&limit=${limit}`);
      dispatch({
        type: LOAD_NEWS,
        payload: data,
      });
      dispatch(loaderOff());
    } catch (err) {
      dispatch(errorOn(err.response.data));
      console.log(err.response.data);
      dispatch(errorOff());
    }
  };
};

export const fetchNewsById = id => {
  return async dispatch => {
    try {
      dispatch(loaderOn());
      const { data } = await api.get(`/posts/${id}`);
      dispatch({
        type: GET_NEWS_BY_ID,
        newsById: data,
      });
      dispatch(loaderOff());
    } catch (err) {
      dispatch(errorOn(err.response.data));
      console.log(err.response.data);
      dispatch(errorOff());
    }
  };
};
