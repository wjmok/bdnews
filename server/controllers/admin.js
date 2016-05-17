'use strict';


const db = require('../models/index');

const adminService = require('../services/admin_service');

module.exports = function adminController( router ) {
  router.get('/news', adminNewsPage);
  router.post('/news', createOneNews);
};

// 管理后台 新闻管理页面
function* adminNewsPage() {
  yield this.render('admin/news');
}

// 管理后台 创建新闻接口
function* createOneNews() {
  const body = this.request.body;
  console.log(body);

  this.body = yield adminService.createNews(body);
}
