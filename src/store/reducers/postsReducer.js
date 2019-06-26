import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_ERROR } from '../constants';

const initialState = {
  postsList: [],
  areRequested: false,
  areLoaded: false,
  error: null,
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        postsList: [],
        areRequested: true,
        areLoaded: false,
        error: null,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        postsList: action.payload,
        areRequested: false,
        areLoaded: true,
        error: null,
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        postsList: [],
        areRequested: false,
        areLoaded: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default posts;
