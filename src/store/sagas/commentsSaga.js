import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { CREATE_COMMENT } from '../constants';
import { createCommentSuccess, createCommentError } from '../actions';

const addComment = ({ postId, body }) =>
  axios.post('https://simple-blog-api.crew.red/comments', {
    postId,
    body,
  });

export function* createComment(action) {
  try {
    const response = yield call(addComment, action.payload);
    console.log('saga', response);
    yield put(createCommentSuccess(response));
  } catch (err) {
    yield put(createCommentError(err.toString()));
  }
}

export default function* defaultSaga() {
  yield takeLatest(CREATE_COMMENT, createComment);
}
