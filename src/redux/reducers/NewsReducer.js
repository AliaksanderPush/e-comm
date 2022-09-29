import { GET_NEWS_BY_ID, LOAD_NEWS } from '../types';

const initialState = {
  news: [],
  singleNews: {},
  totalNews: 1,
};

export const NewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_NEWS: {
      const { payload } = action;
      return {
        ...state,
        news: payload.rows,
        totalNews: payload.count,
      };
    }
    case GET_NEWS_BY_ID:
      return {
        ...state,
        singleNews: action.newsById,
      };

    default:
      return state;
  }
};
