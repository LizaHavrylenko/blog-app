import { all } from 'redux-saga/effects';
import postsSaga from './postsSaga';
import postSaga from './postSaga';
import commentsSaga from './commentsSaga';

export default function* rootSaga(getState) {
  yield all([postsSaga(), postSaga(), commentsSaga()]);
}
