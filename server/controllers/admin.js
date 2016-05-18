'use strict';


const db = require('../models/index');

const adminService = require('../services/admin_service');
const newsService  = require('../services/news_service');

module.exports = function adminController( router ) {
  router.get('/news', adminNewsPage);
  router.post('/news', createOneNews);
};

// 管理后台 新闻管理页面
function* adminNewsPage() {
  const news = yield newsService.getAllNews();
  yield this.render('admin/news', {
    news: news
  });
}

// 管理后台 创建新闻接口
function* createOneNews() {
  const body = this.request.body;
  console.log(body);

  yield adminService.createNews(body);

  this.redirect('/admin/news');
}
