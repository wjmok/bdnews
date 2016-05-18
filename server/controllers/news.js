'use strict';


const db = require('../models/index');

const newsService = require('../services/news_service');

module.exports = function NewsController( router ) {

  // ajax api
  router.get('/', getNews);

  // 删除 news 的接口
  router.delete('/:newsId', deleteNewsById);

  // 编辑 新闻 更新接口
  router.put('/:newsId', updateNewsById);

  router.get('/recommends', getRecommendNews);
};

function* getNews() {
  const query = this.query;
  console.log(query);

  const categoryId = query.category_id;

  // todo: 后续还需要分页
  this.body = yield newsService.getNews(categoryId);
}

function* deleteNewsById() {
  const newsId = this.params.newsId;
  yield newsService.deleteNew(newsId);

  this.body = {};
}

function* updateNewsById() {
  const newsId = this.params.newsId;
  const body   = this.request.body;

  yield newsService.getNews(newsId, body);

  this.body = {};
}


function* getRecommendNews() {
  const query = this.query;
  this.body   = yield newsService.getRecommendNews();
}
