import { call, put, takeLatest } from 'redux-saga/effects';
import Api from './api';
import {
  TEST_API_REQUESTED,
  TEST_API_SUCCEEDED,
  TEST_API_FAILED,
} from './constants';

// worker Saga: will be fired on TEST_API_REQUESTED actions
function* testRequest(action) {
  try {
    const launchData = yield call(Api.upcomingLaunches, action.count);
    yield put({ type: TEST_API_SUCCEEDED, launchData });
  } catch (e) {
    yield put({ type: TEST_API_FAILED, message: e.message });
  }
}

function* testSaga() {
  yield takeLatest(TEST_API_REQUESTED, testRequest);
}

export default [
  testSaga,
];
