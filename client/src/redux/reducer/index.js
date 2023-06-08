import {
  CREATE_DATA_REQUEST,
  CREATE_DATA_SUCCESS,
  CREATE_DATA_FAIL,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
  DELETE_DATA_REQUEST,
  DELETE_DATA_SUCCESS,
  DELETE_DATA_FAIL,
  SINGLE_DATA_REQUEST,
  SINGLE_DATA_SUCCESS,
  SINGLE_DATA_FAIL,
  UPDATE_DATA_REQUEST,
  UPDATE_DATA_SUCCESS,
  UPDATE_DATA_FAIL,
} from '../action-type';

const initialState = {
  data: [],
  isLoading: false,
};

const reducerDetail = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_DATA_REQUEST:
    case GET_DATA_REQUEST:
    case SINGLE_DATA_REQUEST:
    case UPDATE_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_DATA_SUCCESS:
    case GET_DATA_SUCCESS:
    case SINGLE_DATA_SUCCESS:
    case UPDATE_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    case CREATE_DATA_FAIL:
    case GET_DATA_FAIL:
    case SINGLE_DATA_FAIL:
    case UPDATE_DATA_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
export default reducerDetail;

export const deleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case DELETE_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case DELETE_DATA_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
