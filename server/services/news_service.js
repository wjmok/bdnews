'use strict';


const db = require('../models/index');

// 查询新闻列表
exports.getNews = function* ( categoryId ) {

  return yield db.News.findAll({
    where: {
      category_id: categoryId
    },
    raw: true //
  });
};


exports.getRecommendNews = function* () {
  return yield db.News.findAll({
    where: {
      recommend_status: 1
    },
    raw: true //
  });
};
