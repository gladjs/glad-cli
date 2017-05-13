const { includes } = require('lodash');

module.exports = class Addon {

  constructor (addonPath, addonName) {
    this.path  = addonPath;
    this.addon = require(addonPath);
    this.name  = addonName;
    this.hooks = Object.keys(this.addon.hooks);
  }

  integration (hook /*= 'app|onBeforeMongoose|etc...'*/) {
    if (includes(this.hooks, hook)) {
      return this.addon.hooks[hook];
    } else {
      return false;
    }
  }
}
