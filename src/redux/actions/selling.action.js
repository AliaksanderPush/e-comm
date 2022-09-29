import { api } from '../../config/axios.config';
import { loaderOff, loaderOn, errorOff, errorOn } from './app.action';
import {
  ADD_IN_SELLING,
  SEND_SELLING,
  CLEAR_SELLING_LIST,
  REMOVE_SELING,
} from '../types';

export const sendSellingInventories = selling => {
  console.log('prilet->', selling);
  return async dispatch => {
    try {
      dispatch(loaderOn());
      const { data } = await api.post(`/inventory/selling`, selling);
      console.log(' Save server=>', data);
      dispatch(loaderOff());
    } catch (err) {
      dispatch(errorOn(err.response.data));
      console.log(err.response);
      dispatch(errorOff());
    }
  };
};

export const addSellingInv = item => {
  return {
    type: ADD_IN_SELLING,
    sellings: item,
  };
};

export const removeSellingInv = id => {
  return {
    type: REMOVE_SELING,
    invId: id,
  };
};

export const clearSellingCart = () => {
  return {
    type: CLEAR_SELLING_LIST,
  };
};
