'use strict';

const fs        = require('fs');
const _         = require('lodash');
const path      = require('path');
const debug     = require('debug')('models:index');
const Sequelize = require('sequelize');

const config = require('../components/config');

const db = {};

const mysqlConf = config.mysql;

const dbconn = `mysql://${mysqlConf.user}:${mysqlConf.password}@${mysqlConf.host}:${mysqlConf.port}/${mysqlConf.database}`;
debug(dbconn);

const sequelize = new Sequelize(dbconn, config.seq_options);

const modelDir = path.join(__dirname, '/mysql');
// 加载 mysql 目录下的所有模型
fs.readdirSync(modelDir).filter(( file ) => {
  debug(file);
  return (file.indexOf('.') !== 0) && (_.endsWith(file, '.js')) && (file !== 'index.js');
}).forEach(( file ) => {
  const model    = sequelize['import'](path.join(modelDir, file));
  db[model.name] = model;
});

// 建立模型之间的关联 [注意 不要将两个数据库的表 关联]
Object.keys(db).forEach(function ( modelName ) {
  if ( 'associate' in db[modelName] ) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
