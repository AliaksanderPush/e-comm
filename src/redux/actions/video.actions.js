import { api } from '../../config/axios.config';
import { loaderOff, loaderOn, errorOff, errorOn } from './app.action';
import { LOAD_VIDEO, GET_VIDEO_BY_ID } from '../types';

export const fetchVideo = info => {
  const { limit, page } = info;
  return async dispatch => {
    try {
      dispatch(loaderOn());
      const { data } = await api.get(`/video?page=${page}&limit=${limit}`);
      console.log('video=>', data);
      dispatch({
        type: LOAD_VIDEO,
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

export const fetchVideoById = id => {
  return async dispatch => {
    try {
      dispatch(loaderOn());
      const { data } = await api.get(`/video/${id}`);
      console.log('videoId=>', data);
      dispatch({
        type: GET_VIDEO_BY_ID,
        videoById: data,
      });
      dispatch(loaderOff());
    } catch (err) {
      dispatch(errorOn(err.response.data));
      console.log(err.response.data);
      dispatch(errorOff());
    }
  };
};
