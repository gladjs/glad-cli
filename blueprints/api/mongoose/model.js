/**
 * The {{class_name}} Model
 *
 * @module models/{{lower_name}}
 * @version 0.0.1
 */

let mongoose = require('mongoose');
let { Schema } = mongoose;

let {{lower_name}} = new Schema({
  // Edit Your Model Here
});

mongoose.model('{{lower_name}}', {{lower_name}});
module.exports = mongoose.model('{{lower_name}}');
