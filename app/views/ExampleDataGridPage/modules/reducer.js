/*
 * ExampleDataGridPageReducer
 */

import { fromJS } from 'immutable';
import {
  TEST_API_SUCCEEDED,
  TEST_API_FAILED,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  upcomingLaunches: [],
});

function ExampleDataGridReducer(state = initialState, action) {
  switch (action.type) {
    case TEST_API_SUCCEEDED:
      return state.set('upcomingLaunches', fromJS(action.launchData.launches));

    case TEST_API_FAILED:
      // console.error(action.message);
      return state;

    default:
      return state;
  }
}

export default ExampleDataGridReducer;
