/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';
import {
  NAV_MENU_ITEMS,
  PRODUCT_MENU_ITEMS,
  SUPPORT_MENU_ITEMS,
  AVATAR_MENU_ITEMS,
  DEFAULT_LOGO_REDIRECT_PATH,
  ON_PRODUCT_MENU_SELECT,
  ON_NAV_MENU_SELECT,
  TEST_API_SUCCEEDED,
  ON_MULTI_GROUP_CHECK,
  ON_MULTI_GROUP_CHECK_HEADER,
  ON_SINGLE_GROUP_SELECT,
  SINGLE_SELECT_GROUP_ITEMS,
  MULTI_SELECT_GROUP_ITEMS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  navMenuItems: NAV_MENU_ITEMS,
  currentNavMenuIndex: 0,
  productMenuItems: PRODUCT_MENU_ITEMS,
  currentProductSectionIndex: 0,
  currentProductItemIndex: 0,
  supportMenuItems: SUPPORT_MENU_ITEMS,
  avatarMenuItems: AVATAR_MENU_ITEMS,
  logoRedirect: DEFAULT_LOGO_REDIRECT_PATH,
  avatarImage: '',
  userName: 'Test Name',
  userEmail: 'test@email.com',
  showNotifications: true,
  notificationAlerts: [],
  testSagaTimestamp: 0,
  singleSelectGroupItems: SINGLE_SELECT_GROUP_ITEMS,
  multiSelectGroupItems: MULTI_SELECT_GROUP_ITEMS,
  singleGroupSelectedIndex: null,
  singleGroupSelectedSectionIndex: null,
  multiSelectGroupHeaderChecked: false,
  multiSelectGroupCheckedIndices: new Set(),
});

function AppReducer(state = initialState, action) {
  switch (action.type) {
    case ON_PRODUCT_MENU_SELECT:
      return state.merge({
        currentProductSectionIndex: action.state.activeSectionIndex,
        currentProductItemIndex: action.state.activeMenuItemIndex,
      });

    case ON_NAV_MENU_SELECT:
      return state.set('currentNavMenuIndex', action.selectionIndex);

    case TEST_API_SUCCEEDED:
      return state.set('testSagaTimestamp', action.timestamp);

    case ON_MULTI_GROUP_CHECK:
      return state.set('multiSelectGroupCheckedIndices', action.selectedIndices);

    case ON_MULTI_GROUP_CHECK_HEADER:
      return state.set('multiSelectGroupHeaderChecked', action.state.isHeaderChecked)
        .set('multiSelectGroupCheckedIndices', action.state.checkedItemsIndices);

    case ON_SINGLE_GROUP_SELECT:
      return state.set('singleGroupSelectedIndex', action.state.selectedIndex)
        .set('singleGroupSelectedSectionIndex', action.state.selectedSection);

    default:
      return state;
  }
}

export default AppReducer;
