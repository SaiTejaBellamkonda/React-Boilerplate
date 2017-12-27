import { call, put, takeLatest } from 'redux-saga/effects';
import {
  TEST_API_REQUESTED,
  TEST_API_SUCCEEDED,
  TEST_API_FAILED,
} from './constants';
const Api = {
  testRequest: () => {
    const promise = new Promise((resolve) => setTimeout(resolve(Date.now()), 1000));
    return promise;
  },
};

// worker Saga: will be fired on TEST_API_REQUESTED actions
function* testRequest(/* action */) {
  try {
    const timestamp = yield call(Api.testRequest/* , action.payload.userId */);
    yield put({ type: TEST_API_SUCCEEDED, timestamp });
  } catch (e) {
    yield put({ type: TEST_API_FAILED, message: e.message });
  }
}

function* testSaga() {
  yield takeLatest(TEST_API_REQUESTED, testRequest);
}

export default {
  testSaga,
};
