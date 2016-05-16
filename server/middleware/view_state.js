'use strict';

/**
 * Module dependencies
 */
const _ = require('lodash');

module.exports = function () {
  return function* ViewState( next ) {
    const state = this.state || {};

    this.state = _.extend(state, {
      user: this.user
    });

    yield next;
  };
};
