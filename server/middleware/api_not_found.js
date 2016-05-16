'use strict';

module.exports = function () {
  return function* apiNotFound( next ) {
    yield* next;

    if ( this.status && this.status !== 404 ) {
      return;
    }
    if ( this.body ) {
      return;
    }

    // todo: 这里可以渲染全局 404 页面
    this.status = 404;
  };
};


