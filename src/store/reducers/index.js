import { combineReducers } from 'redux';

import posts from './postsReducer';
import post from './postReducer';
import comments from './commentsReducer';

export default combineReducers({
  posts,
  post,
  comments,
});
