'use strict';

const db = require('../models/index');

const homeService = require('../services/home_service');

module.exports = function IndexController( router ) {
  router.get('/', homePage);

  router.get('/login', loginPage);
  router.post('/login', login);

  router.get('logout', logout);
};

function* homePage() {
  yield this.render('home/index');
}

function* loginPage() {
  yield this.render('auth/login');
}


function* login() {
  const body = this.request.body;

  const username = body.username;
  const password = body.password;

  const user = yield db.User.findOne({
    where: {
      username: username,
      password: password
    },
    raw: true
  });

  if ( !user ) {
    this.body = '用户不存在';
    return;
  }

  this.login(user);

  this.redirect('/user?id=' + user.id);
}

function* logout() {
  this.logout();
  this.redirect('/');
}
