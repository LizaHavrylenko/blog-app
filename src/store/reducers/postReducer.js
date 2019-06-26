import { GET_POST, GET_POST_SUCCESS, GET_POST_ERROR } from '../constants';

const initialState = {
  post: {},
  isLoaded: false,
  isRequested: false,
  error: null,
};

const post = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        post: {},
        isRequested: true,
        isLoaded: false,
        error: null,
      };
    case GET_POST_SUCCESS:
      return {
        post: action.payload,
        isRequested: false,
        isLoaded: true,
        error: null,
      };
    case GET_POST_ERROR:
      return {
        post: {},
        isRequested: true,
        isLoaded: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default post;
