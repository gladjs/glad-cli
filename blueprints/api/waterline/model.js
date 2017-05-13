/**
 * The {{class_name}} Model
 *
 * @module models/{{lower_name}}
 * @version 0.0.1
 */

let Waterline = require('waterline');

let {{class_name}} = Waterline.Collection.extend({
  identity: '{{lower_name}}',
  connection: '{{adapter}}',
  attributes: {}
});

module.exports = {{class_name}};
