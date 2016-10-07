const bunyan = require('bunyan');
const PrettyStream = require('bunyan-prettystream');

const prettyStdOut = new PrettyStream();
prettyStdOut.pipe(process.stdout);

module.exports = (config, name) => {
  const logger = bunyan.createLogger({
    name,
    stream: prettyStdOut,
    serializers: bunyan.stdSerializers,
  });
  logger.level(config.log.level);
  return logger;
};
