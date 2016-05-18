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

exports.getAllNews = function* () {
  return yield db.News.findAll({
    raw: true
  });
};

exports.deleteNew = function* ( id ) {
  yield db.News.destroy({ where: { id: id } });
};

// 更新接口
exports.updateNew = function *( id, news ) {
  yield db.News.update(
    {
      title: news.title,
      content: news.content,
      cover_url: news.cover_url
    },
    {
      where: {
        id: id
      }
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


