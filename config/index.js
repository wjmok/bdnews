'use strict';

/**
 * Module dependencies
 */
const fs   = require('fs');
const path = require('path');

const ENV_PATH = 'env';
const NODE_ENV = process.env.NODE_ENV;

const options = {
  env: 'development',
  dir: __dirname
};

const fileNames = fs.readdirSync(path.join(options.dir, ENV_PATH))
  .filter(file => {
    return path.extname(file) === '.js';
  })
  .map(file => {
    return path.basename(file, '.js');
  });

const env           = fileNames.indexOf(NODE_ENV) > -1 ? NODE_ENV : options.env;
const hasCommonConf = fileNames.indexOf('common') > -1;
const hasLocalConf  = fileNames.indexOf('local') > -1;

let envConfig = require(path.join(options.dir, ENV_PATH, env));

if ( hasCommonConf ) {
  envConfig = Object.assign(
    require(path.join(options.dir, ENV_PATH, 'common')),
    envConfig
  );
}

const config = envConfig || {};
config.env   = env;

if ( hasLocalConf ) {
  config.localConfig = require(path.join(options.dir, ENV_PATH, 'local')) || {};
}

module.exports = config;
