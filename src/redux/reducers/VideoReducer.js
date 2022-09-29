import { GET_VIDEO_BY_ID, LOAD_VIDEO } from '../types';

const initialState = {
  video: [],
  singleVideo: null,
  totalVideo: 1,
};

export const VideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_VIDEO:
      const { payload } = action;
      return {
        ...state,
        video: [...state.video, ...payload.rows],
        totalVideo: payload.count,
      };
    case GET_VIDEO_BY_ID:
      return {
        ...state,
        singleVideo: action.videoById,
      };

    default:
      return state;
  }
};
