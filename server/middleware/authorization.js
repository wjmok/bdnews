'use strict';

exports.requireLogin = function* ( next ) {
  if ( this.isAuthenticated() ) {
    return yield next;
  } else {
    // 如果未登陆，跳转到登陆页面 /login
    this.redirect('/login')
  }
};

