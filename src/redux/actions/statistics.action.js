import { api } from '../../config/axios.config';
import { loaderOff, loaderOn, errorOff, errorOn } from './app.action';
import { GET_HISTORY_STATISTIC, GET_COMMON_STATISTIC } from '../types';

export const loadHistoryStatistics = () => {
  return async dispatch => {
    try {
      dispatch(loaderOn());
      const { data } = await api.get(`/inventory/my/history`);
      dispatch({
        type: GET_HISTORY_STATISTIC,
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

export const loadCommonStatistics = () => {
  return async dispatch => {
    try {
      dispatch(loaderOn());
      const { data } = await api.get(`/inventory/my/statistics`);
      console.log('data=>', data);
      dispatch({
        type: GET_COMMON_STATISTIC,
        statistic: data,
      });
      dispatch(loaderOff());
    } catch (err) {
      dispatch(errorOn(err.response.data));
      console.log(err.response.data);
      dispatch(errorOff());
    }
  };
};
