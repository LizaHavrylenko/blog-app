import { GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS } from '../constants';

export const getPosts = () => ({
  type: GET_POSTS,
});

export const getPostsSuccess = ({ data }) => ({
  type: GET_POSTS_SUCCESS,
  payload: data,
});

export const getPostsError = err => ({
  type: GET_POSTS_ERROR,
  payload: err,
});
