import { GET_HISTORY_STATISTIC, GET_COMMON_STATISTIC } from '../types';

const initialState = {
  historyStat: [],
  commonStat: [],
};

export const StatisticReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HISTORY_STATISTIC: {
      return {
        ...state,
        historyStat: action.payload,
      };
    }
    case GET_COMMON_STATISTIC: {
      return {
        ...state,
        commonStat: action.statistic,
      };
    }

    default:
      return state;
  }
};
