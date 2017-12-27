/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');
const globalComponentPath = path.join(__dirname, '../../../app/components');
const globalContainerPath = path.join(__dirname, '../../../app/containers');
const pageComponents = (fs.existsSync(globalComponentPath)) ? fs.readdirSync(globalComponentPath) : [];
const pageContainers = (fs.existsSync(globalContainerPath)) ? fs.readdirSync(globalContainerPath) : [];
const components = pageComponents.concat(pageContainers);

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
