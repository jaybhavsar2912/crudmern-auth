import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
} from '../action-type';

const initialState = {
  userdata: [],
  isLoading: false,
  isAuthincated: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER_REQUEST:
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isLoading: false,
        isAuthincated: false,
      };
    case SIGNUP_USER_SUCCESS:
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        isAuthincated: true,
      };
    }
    case SIGNUP_USER_FAIL:
    case LOGIN_USER_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isAuthincated: false,
      };
    }
    default:
      return state;
  }
};
