let chalk = require('chalk');
let { log } = require('console');

let logger = {

  log,

  chalk,

  color (color, string) {
    log(chalk[color](string));
  },

  yellow (s) {
    logger.color('yellow', s);
  },

  red (s) {
    logger.color('red', s);
  },

  green (s) {
    logger.color('green', s);
  },

  orange (s) {
    logger.color('magenta', s);
  },

  grey (s) {
    logger.color('grey', s);
  }
};

module.exports = logger;
