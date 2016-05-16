'use strict';

/**
 * Module dependencies
 */
const koa  = require('koa');
const http = require('http');
const path = require('path');

const staticCache  = require('koa-static-cache');
const bodyParser   = require('koa-bodyparser');
const enrouten     = require('siren-enrouten');
const debug        = require('debug')('server');
const render       = require('koa-swig');
const session      = require('koa-session');
const favicon      = require('koa-favicon');
const csrf         = require('koa-csrf');
const conditional  = require('koa-conditional-get');
const etag         = require('koa-etag');
const cors         = require('kcors');
const responseTime = require('koa-response-time');

const middleware = require('./server/middleware');

const config = require('./server/components/config');

const root = __dirname;

let app = koa();

app.use(responseTime());
if ( 'production' !== app.env ) {
  app.use(require('koa-logger')());
}

app.use(favicon(root + '/public/favicon.ico'));

// static
app.use(staticCache(path.join(root, 'public/'), {
  maxAge: 365 * 24 * 60 * 60,
  gzip: true
}));

// web
app.keys  = config.session.keys;
app.proxy = true;

app.use(session(app));

if ( 'development' === app.env ) {
  app.use(middleware.MockUser());
}

app.use(middleware.Passport());

app.use(cors());
app.use(bodyParser());

// etag works together with conditional-get
app.use(conditional());
app.use(etag());

app.use(middleware.ApiNotFound());

// extends view locals
app.use(middleware.ViewState());

// render
app.context.render = render({
  root: path.join(root, 'server/views'),
  autoescape: true,
  // disable, set to false or 'memory'
  cache: 'production' === app.env ? 'memory' : false,
  ext: 'html',
  // locals: '',
  writeBody: true,
  //filters: filters,
  //tags: tags,
  //extensions: extensions
});

app.use(enrouten(app, {
  basedir: root,
  directory: 'server/controllers'
}));

// error handler
app.on('error', err => {
  console.error(err.stack);
});

app = http.createServer(app.callback());

if ( !module.parent ) {
  app.listen(config.port);
}

module.exports = app;
