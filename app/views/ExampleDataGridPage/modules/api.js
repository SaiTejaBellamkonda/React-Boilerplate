/**
 * Example API accesses the Launch Library, which is an index of past and
 * upcoming space flights.
 *
 * Learn more/docs:
 * https://launchlibrary.net/1.2/docs/api.html
 */

const API_ROOT = 'https://launchlibrary.net/1.2';
const UPCOMING_LAUNCHES_ENDPOINT = 'launch/next';

export default {
  upcomingLaunches: (howMany = 5) => (
    fetch(`${API_ROOT}/${UPCOMING_LAUNCHES_ENDPOINT}/${howMany}`)
      .then((fetchResponseObj) => {
        try {
          return fetchResponseObj.json();
        } catch (e) {
          return e;
        }
      })
  ),
};
