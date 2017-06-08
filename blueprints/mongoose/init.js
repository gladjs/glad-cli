const mongoose = require('mongoose');

module.exports = function (server, app, express) {
  return new Promise (function (resolve, reject) {
    mongoose.Promise = global.Promise;
    resolve();
  });
};
