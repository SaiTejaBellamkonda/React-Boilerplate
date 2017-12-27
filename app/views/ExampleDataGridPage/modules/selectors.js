/**
 * Example Data selectors
 */

import { createSelector } from 'reselect';

const selectExampleData = (state) => state.get('exampleData');

const makeSelectLaunchData = () => createSelector(
  selectExampleData,
  (exampleData) => {
    const launchData = exampleData.get('upcomingLaunches');

    return launchData.map((launch) => ({
      id: launch.get('id'),
      rocket: launch.getIn(['rocket', 'name']),
      launchSite: launch.getIn(['location', 'name']),
      missionCount: launch.get('missions').size,
    })).toJS();
  }
);

export {
  selectExampleData,
  makeSelectLaunchData,
};
