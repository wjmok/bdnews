'use strict';

/**
 * Module dependencies
 */
const fs   = require('fs');
const path = require('path');
const _    = require('lodash');

fs.readdirSync(__dirname).filter(( file ) => {
  return (file.indexOf('.') !== 0) && (_.endsWith(file, '.js')) && (file !== 'index.js');
}).forEach(( file ) => {
  const name = _.camelCase(path.basename(file, '.js'));

  exports[_.capitalize(name)] = require('./' + file);
});
