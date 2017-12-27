/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */
import {
  ON_PRODUCT_MENU_SELECT,
  TEST_API_REQUESTED,
  ON_MULTI_GROUP_CHECK,
  ON_MULTI_GROUP_CHECK_HEADER,
  ON_SINGLE_GROUP_SELECT,
} from './constants';

export const onProductMenuSelect = (state) => ({
  type: ON_PRODUCT_MENU_SELECT,
  state,
});

export const onRequestTestApiTimestamp = () => ({
  type: TEST_API_REQUESTED,
});

export const onSingleGroupSelect = (state) => ({
  type: ON_SINGLE_GROUP_SELECT,
  state,
});

export const onMultiGroupCheck = (selectedIndices) => ({
  type: ON_MULTI_GROUP_CHECK,
  selectedIndices,
});

export const onMultiGroupCheckHeader = (state) => ({
  type: ON_MULTI_GROUP_CHECK_HEADER,
  state,
});
