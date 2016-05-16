'use strict';


function main() {
  process.on('uncaughtException', ( err ) => {
    console.error(`Caught exception: ${err.stack}`);
  });

  // Load global packages
  require('./server/components/global');

  // Start app
  const app    = require('./app');
  const config = require('./config');

  app.listen(config.port, () => {
    console.log('server listen on port %s', config.port);
  });
}

main();
