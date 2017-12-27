/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const componentGenerator = require('./component/index.js');
const containerGenerator = require('./container/index.js');
const routeGenerator = require('./route/index.js');
const viewGenerator = require('./view/index.js');
const languageGenerator = require('./language/index.js');

module.exports = (plop) => {
  plop.setGenerator('global component', componentGenerator);
  plop.setGenerator('global container', containerGenerator);
  plop.setGenerator('route', routeGenerator);
  plop.setGenerator('view', viewGenerator);
  plop.setGenerator('language', languageGenerator);
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
