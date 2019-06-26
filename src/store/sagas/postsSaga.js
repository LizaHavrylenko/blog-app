import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { GET_POSTS } from '../constants';
import { getPostsSuccess, getPostsError } from '../actions';

const fetchPosts = () => axios.get('https://simple-blog-api.crew.red/posts');

export function* getPosts() {
  try {
    const response = yield call(fetchPosts);

    yield put(getPostsSuccess(response));
  } catch (err) {
    yield put(getPostsError(err.toString()));
  }
}

export default function* defaultSaga() {
  yield takeLatest(GET_POSTS, getPosts);
}
