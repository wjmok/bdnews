'use strict';


const db = require('../models/index');

const newsService = require('../services/news_service');

module.exports = function NewsController( router ) {

  // ajax api
  router.get('/', getNews);

  router.get('/recommends', getRecommendNews);
};

function* getNews() {
  const query = this.query;
  console.log(query);

  const categoryId = query.category_id;

  // todo: 后续还需要分页
  this.body = yield newsService.getNews(categoryId);
}


function* getRecommendNews() {
  const query = this.query;
  this.body   = yield newsService.getRecommendNews();
}
