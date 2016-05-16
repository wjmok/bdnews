'use strict';

module.exports = function ( sequelize, DataTypes ) {
  return sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
      comment: '用户昵称'
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
      comment: '密码'
    }
  }, {
    tableName: 'users',
    comment: '用户表',
    timestamps: true,
    underscored: true,

    classMethods: {
      associate: function ( models ) {

      }
    }
  });
};
