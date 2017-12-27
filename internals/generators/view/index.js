/**
 * View Generator
 */
const fs = require('fs');
const path = require('path');
const viewExists = require('../utils/viewExists');

function trimTemplateFile(template) {
  // Loads the template file and trims the whitespace and then returns the content as a string.
  return fs.readFileSync(path.join(__dirname, `./${template}`), 'utf8').replace(/\s*$/, '');
}

module.exports = {
  description: 'Add a view',
  prompts: [{
    type: 'input',
    name: 'viewName',
    message: 'What should it be called?',
    default: 'TestView',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return viewExists(value) ? 'A view with this name already exists' : true;
      }

      return 'The name is required';
    },
  }, {
    type: 'input',
    name: 'routePath',
    message: 'What path should it have in the router? (blank for none)',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return viewExists(value) ? 'A view with this name already exists' : true;
      }

      return true;
    },
  }, {
    type: 'confirm',
    name: 'wantActionsAndReducer',
    default: true,
    message: 'Do you want an actions and reducers for this view?',
  }, {
    type: 'confirm',
    name: 'wantSagas',
    default: true,
    message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)',
  }, {
    type: 'confirm',
    name: 'wantMessages',
    default: true,
    message: 'Do you want i18n messages (i.e. will this view render text)?',
  }],

  actions: (data) => {
    const {
      routePath,
      wantActionsAndReducer,
      wantSagas,
      wantMessages,
    } = data;

    const actions = [{
      type: 'add',
      path: '../../app/views/{{properCase viewName}}/index.js',
      templateFile: './view/index.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/views/{{properCase viewName}}/containers/{{properCase viewName}}Container.js',
      templateFile: './view/container.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/views/{{properCase viewName}}/components/{{properCase viewName}}.jsx',
      templateFile: './view/component.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/views/{{properCase viewName}}/modules/constants.js',
      templateFile: './view/constants.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/views/{{properCase viewName}}/modules/selectors.js',
      templateFile: './view/selectors.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/views/{{properCase viewName}}/modules/tests/selectors.test.js',
      templateFile: './view/selectors.test.js.hbs',
      abortOnFail: true,
    }];

    // If component wants messages
    if (wantMessages) {
      actions.push({
        type: 'add',
        path: '../../app/views/{{properCase viewName}}/modules/messages.js',
        templateFile: './view/messages.js.hbs',
        abortOnFail: true,
      });
    }

    // If they want actions and a reducer, generate actions.js, reducer.js and
    // the corresponding tests for actions and the reducer
    if (wantActionsAndReducer) {
      // Actions
      actions.push({
        type: 'add',
        path: '../../app/views/{{properCase viewName}}/modules/actions.js',
        templateFile: './view/actions.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../app/views/{{properCase viewName}}/modules/tests/actions.test.js',
        templateFile: './view/actions.test.js.hbs',
        abortOnFail: true,
      });

      // Reducer
      actions.push({
        type: 'add',
        path: '../../app/views/{{properCase viewName}}/modules/reducer.js',
        templateFile: './view/reducer.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../app/views/{{properCase viewName}}/modules/tests/reducer.test.js',
        templateFile: './view/reducer.test.js.hbs',
        abortOnFail: true,
      });
    }

    // Sagas
    if (wantSagas) {
      actions.push({
        type: 'add',
        path: '../../app/views/{{properCase viewName}}/modules/sagas.js',
        templateFile: './view/sagas.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../app/views/{{properCase viewName}}/modules/tests/sagas.test.js',
        templateFile: './view/sagas.test.js.hbs',
        abortOnFail: true,
      });
    }

    // Router entry
    if (routePath && routePath !== '') {
      if (wantActionsAndReducer) {
        actions.push({
          type: 'modify',
          path: '../../app/routes.js',
          pattern: /(\s{\n\s{0,}path: '\*',).*/g,
          template: trimTemplateFile('routeWithReducer.hbs'),
        });
      } else {
        actions.push({
          type: 'modify',
          path: '../../app/routes.js',
          pattern: /(\s{\n\s{0,}path: '\*',).*/g,
          template: trimTemplateFile('route.hbs'),
        });
      }
    }

    return actions;
  },
};
