import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { GET_POST } from '../constants';
import { getPostSuccess, getPostError } from '../actions';

const fetchPost = id =>
  axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`);

export function* getPost(action) {
  try {
    const post = yield call(fetchPost, action.payload);

    yield put(getPostSuccess(post));
  } catch (err) {
    yield put(getPostError(err.toString()));
  }
}

export default function* defaultSaga() {
  yield takeLatest(GET_POST, getPost);
}
