'use strict';

/**
 * Module dependencies
 */
const config = require('../components/config');

module.exports = function () {
  return function* MockUser( next ) {
    const mockUser = config.mockUser;
    if ( mockUser && mockUser.debug ) {
      this.user = mockUser.user;
    }

    yield next;
  };
};
