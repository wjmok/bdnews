'use strict';

module.exports = function ( sequelize, DataTypes ) {
  // use : db.New.findById()...

  return sequelize.define('News', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
      comment: '标题'
    },
    content: {
      type: DataTypes.STRING(500),
      allowNull: false,
      defaultValue: '',
      comment: '内容'
    },
    cover_url: {
      type: DataTypes.STRING(500),
      allowNull: false,
      defaultValue: '',
      comment: '风险图片地址'
    },
    link_url: {
      type: DataTypes.STRING(500),
      allowNull: false,
      defaultValue: '',
      comment: '链接地址'
    },
    category_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '分类id'
    },
    recommend_status: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '推荐状态： 0.未推荐  1. 推荐到首页'
    }
  }, {
    tableName: 'news',
    comment: '新闻表',
    timestamps: true,
    underscored: true,

    classMethods: {
      associate: function ( models ) {

      }
    }
  });
};
