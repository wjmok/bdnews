'use strict';

/**
 * Module dependencies
 */
const debug = require('debug')('middleware:passport');
const db    = require('../models/index');

module.exports = function () {
  return function* passport( next ) {
    this.login = function* ( user ) {
      this.session          = this.session || {};
      this.session.passport = {
        user: user.id
      };
    };

    this.logout = function* () {
      this.session          = this.session || {};
      this.session.passport = null;
    };

    // 解析session
    const session = this.session;
    debug(session);

    if ( session && session.passport ) {
      const userId = session.passport.user;
      this.user    = yield db.User.findById(userId, { raw: true });
    }

    yield next;
  };
};
