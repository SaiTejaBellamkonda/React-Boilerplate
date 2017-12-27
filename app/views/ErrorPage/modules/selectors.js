import { createSelector } from 'reselect';
/**
 * Passthrough selector to the global store
 */

export const selectStore = () => (state) => state;

/**
 * Default selector used by ErrorPage
 */
export const makeSelectErrorPage = () => createSelector(
  selectStore(),
  (substate) => substate.toJS()
);

export default makeSelectErrorPage;
