import { combineReducers } from 'redux';
import { AppReducer } from './reducers/AppReducer';
import { UserReducer } from './reducers/UserReducer';
import { InventoryReducer } from './reducers/InventoryReducer';
import { VideoReducer } from './reducers/VideoReducer';
import { NewsReducer } from './reducers/NewsReducer';
import { StatisticReducer } from './reducers/StatisticReduser';
import { SellingReducer } from './reducers/SellingReducer';

export const rootReducer = combineReducers({
  AppReducer,
  UserReducer,
  InventoryReducer,
  VideoReducer,
  NewsReducer,
  StatisticReducer,
  SellingReducer,
});
