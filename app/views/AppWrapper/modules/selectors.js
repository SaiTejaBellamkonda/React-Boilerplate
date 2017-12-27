/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('app');

const makeSelectMasthead = () => createSelector(
  selectGlobal,
  (globalState) => ({
    navMenuItems: globalState.get('navMenuItems').toJS(),
    productMenuItems: globalState.get('productMenuItems').toJS(),
    currentProductName: globalState.getIn([
      'productMenuItems',
      globalState.get('currentProductSectionIndex'),
      globalState.get('currentProductItemIndex'),
      'label',
    ]),
    supportMenuItems: globalState.get('supportMenuItems').toJS(),
    avatarMenuItems: globalState.get('avatarMenuItems').toJS(),
    logoRedirect: globalState.get('logoRedirect'),
  })
);

const makeSelectLeftStrip = () => createSelector(
  selectGlobal,
  (globalState) => ({
    multiSelectGroupItems: globalState.get('multiSelectGroupItems').toJS(),
    singleSelectGroupItems: globalState.get('singleSelectGroupItems').toJS(),
  })
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  makeSelectMasthead,
  makeSelectLocationState,
  makeSelectLeftStrip,
};
