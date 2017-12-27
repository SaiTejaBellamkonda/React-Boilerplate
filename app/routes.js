// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('views/HomePage/modules/reducer'),
          import('views/HomePage/modules/sagas'),
          import('views/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/example-grid',
      name: 'exampleDataGridPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('views/ExampleDataGridPage/modules/reducer'),
          import('views/ExampleDataGridPage/modules/sagas'),
          import('views/ExampleDataGridPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('exampleData', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/example-blank',
      name: 'exampleBlankPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('views/ExampleBlankPage/modules/reducer'),
          import('views/ExampleBlankPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('exampleData', reducer.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'errorPage',
      getComponent(location, cb) {
        import('views/ErrorPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
