/**
 * viewExists
 *
 * Check whether the given view exists
 */

const fs = require('fs');
const path = require('path');
const views = fs.readdirSync(path.join(__dirname, '../../../app/views'));

function viewExists(viewName) {
  return views.indexOf(viewName) >= 0;
}

module.exports = viewExists;
