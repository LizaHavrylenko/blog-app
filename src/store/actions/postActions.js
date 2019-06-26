import { GET_POST, GET_POST_ERROR, GET_POST_SUCCESS } from '../constants';

export const getPost = id => ({
  type: GET_POST,
  payload: id,
});

export const getPostSuccess = ({ data }) => ({
  type: GET_POST_SUCCESS,
  payload: data,
});

export const getPostError = err => ({
  type: GET_POST_ERROR,
  payload: err,
});
