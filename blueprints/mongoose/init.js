const mongoose = require('mongoose');

export default function (server, app, express) {
  mongoose.Promise = global.Promise;
  return Promise.resolve()
};
