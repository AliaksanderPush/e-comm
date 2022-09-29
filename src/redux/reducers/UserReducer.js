import {
  LOAD_USER_SUCCESS,
  SINGOUT_USER,
  UPDATE_TOKENS,
  UPDATE_USER_DATA,
  GET_TOKEN_FOR_RESET_CODE,
  GET_TOKEN_FOR_RESTORE_PASSWORD,
  CLEAR_TOKENS_FOR_RESTORE_PASS,
} from '../types';

const initialState = {
  user: null,
  tokens: null,
  tokenForResetCode: null,
  tokenForRestorePass: null,
  userEmail: null,
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_SUCCESS:
      const { id, username, email, expiresIn, accessToken, refreshToken } =
        action.payload;
      return {
        ...state,
        user: { id, username, email, expiresIn },
        tokens: { accessToken, refreshToken },
      };

    case UPDATE_TOKENS:
      return {
        ...state,
        tokens: action.newTokens,
      };
    case UPDATE_USER_DATA:
      return {
        ...state,
        user: action.updUser,
      };

    case SINGOUT_USER:
      return {
        user: null,
        tokens: null,
      };
    case GET_TOKEN_FOR_RESET_CODE:
      return {
        ...state,
        tokenForResetCode: action.resetCode,
        userEmail: action.email,
      };
    case GET_TOKEN_FOR_RESTORE_PASSWORD:
      return {
        ...state,
        tokenForRestorePass: action.restorePass,
      };
    case CLEAR_TOKENS_FOR_RESTORE_PASS:
      return {
        ...state,
        tokenForResetCode: null,
        tokenForRestorePass: null,
        userEmail: null,
      };

    default:
      return state;
  }
};
