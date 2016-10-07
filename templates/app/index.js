/**
 This does nothing. Put your entry code here.
 **/

const config = require('config');
const logger = require('./lib/logger')(config, 'app');

logger.info({ status: 'started' });

setTimeout(() => {
  logger.info({ status: 'ok', complete: true });
}, 2000);
