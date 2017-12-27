import {
  TEST_API_REQUESTED,
} from './constants';

export const onRequestData = (count = 5) => ({
  type: TEST_API_REQUESTED,
  count,
});
