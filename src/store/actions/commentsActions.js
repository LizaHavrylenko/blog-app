import {
  CREATE_COMMENT,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_ERROR,
} from '../constants';

export const createComment = data => ({
  type: CREATE_COMMENT,
  payload: data,
});

export const createCommentSuccess = ({ data }) => ({
  type: CREATE_COMMENT_SUCCESS,
  payload: data,
});

export const createCommentError = error => ({
  type: CREATE_COMMENT_ERROR,
  error,
});
