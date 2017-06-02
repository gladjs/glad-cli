module.exports = {

  port : 4242,

  host : '0.0.0.0',

  logHTTP: true,

  defaultBodyParser : 'json',

  defaultBodyParserOptions : {
    limit : '0.3mb',
    type : 'json'
  },

  defaultViewEngine : 'pug',

  exposeModelsGlobally : true,

  redis : {
    host: "localhost",
    port: 6379
  },

  cookie : {
    name : 'glad.sid',
    secret: 'change-this-tosomethingthatlooksuglyandmakeitprettylongandrandomtoo',
    maxAge : 3600000 * 24,
  },

  session : {
    storage: 'redis' // can be mongodb
  }

};
