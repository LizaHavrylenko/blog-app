import {
  CREATE_COMMENT,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_ERROR,
} from '../constants';

const initialState = {
  comment: {},
  isLoaded: false,
  isRequested: false,
  error: null,
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        comment: {},
        isLoaded: false,
        isRequested: true,
        error: null,
      };
    case CREATE_COMMENT_SUCCESS:
      console.log('reducer', action.payload);
      return {
        comment: action.payload,
        isLoaded: true,
        isRequested: false,
        error: null,
      };
    case CREATE_COMMENT_ERROR:
      return {
        comment: {},
        isLoaded: false,
        isRequested: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default comments;
