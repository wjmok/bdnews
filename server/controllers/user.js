'use strict';


const db = require('../models/index');

module.exports = function UserController( router ) {

  // 测试数据库查询  http://localhost:3000/user?id=1
  router.get('/', user);
};

function* user() {
  const query = this.query;
  const id    = query.id;

  console.log('user ', this.user);

  // 数据库查询
  const user = yield db.User.findById(id);
  if ( !user ) {
    this.body = '用户不存在';
  } else {
    yield this.render('user/index', {
      queryUser: user.toJSON()
    });
  }
}

