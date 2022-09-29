import { api } from '../../config/axios.config';
import { loaderOff, loaderOn, errorOff, errorOn } from './app.action';
import {
  LOAD_INVENTARY,
  SEARCH_INVENTORY,
  MY_INVENTORY,
  RUNNING_LOW,
  SET_CURRENT_PAGE,
  ADD_INVENTORIES,
  DECREMENT_INVENTORIES,
  SAVE_AND_CLEAN_MY_ORDERED_INVENTORY,
  INCREMENT_RUNN_LOW,
  DECREMENT_RUNN_LOW,
  CLEAR_ORDER_RUNN_LOW,
  ADD_SEARCH_FILTER_MY_INVENTORY,
} from '../types';

export const fetchInventories = info => {
  const { limit, page } = info;
  return async dispatch => {
    try {
      dispatch(loaderOn());
      const { data } = await api.get(`/inventory?page=${page}&limit=${limit}`);
      dispatch({
        type: LOAD_INVENTARY,
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

export const searchInventories = info => {
  const { limit, page, search } = info;
  return async dispatch => {
    try {
      dispatch(loaderOn());
      const { data } = await api.get(
        `/inventory?search=${search}&page=${page}&limit=${limit}`,
      );
      dispatch({
        type: SEARCH_INVENTORY,
        search: data,
      });
      dispatch(loaderOff());
    } catch (err) {
      dispatch(errorOn(err.response.data));
      console.log(err.response.data);
      dispatch(errorOff());
    }
  };
};

export const loadMyInventories = () => {
  return async dispatch => {
    try {
      dispatch(loaderOn());
      const { data } = await api.get(`/inventory/my`);
      dispatch({
        type: MY_INVENTORY,
        addInventory: data,
      });
      dispatch(loaderOff());
    } catch (err) {
      dispatch(errorOn(err.response.data));
      console.log(err.response.data);
      dispatch(errorOff());
    }
  };
};

export const loadRunningLow = () => {
  return async dispatch => {
    try {
      dispatch(loaderOn());
      console.log('сработал Running');
      const { data } = await api.get(`/inventory/my/RunningLow`);
      dispatch({
        type: RUNNING_LOW,
        runLow: data,
      });
      dispatch(loaderOff());
    } catch (err) {
      dispatch(errorOn(err.response.data));
      console.log(err.response.data);
      dispatch(errorOff());
    }
  };
};

export const saveOrderedInventories = (inventories, isRunnLow) => {
  return async dispatch => {
    try {
      dispatch(loaderOn());
      const { data } = await api.post(`/inventory/order`, inventories);
      console.log(' Save server=>', data);

      dispatch(cleanOrderedInventory(isRunnLow));
      dispatch(loaderOff());
    } catch (err) {
      dispatch(errorOn(err.response.data));
      console.log(err.response.data);
      dispatch(errorOff());
    }
  };
};

export const cleanOrderedInventory = isRunnLow => {
  return {
    type: SAVE_AND_CLEAN_MY_ORDERED_INVENTORY,
    flag: isRunnLow,
  };
};

export const setCurrPage = page => {
  return {
    type: SET_CURRENT_PAGE,
    page,
  };
};

export const addInventories = info => {
  const { id, name, price } = info;
  return {
    type: ADD_INVENTORIES,
    inventory: id,
    name,
    price,
  };
};

export const decrementInventories = id => {
  return {
    type: DECREMENT_INVENTORIES,
    decInventory: id,
  };
};

export const incRunnLow = info => {
  const { id, name, price } = info;
  return {
    type: INCREMENT_RUNN_LOW,
    runLowIncID: id,
    name,
    price,
  };
};

export const decrementIRunnLow = id => {
  return {
    type: DECREMENT_RUNN_LOW,
    runLowDecID: id,
  };
};

export const addSearchMyInv = text => {
  return {
    type: ADD_SEARCH_FILTER_MY_INVENTORY,
    searchFilterInv: text,
  };
};
