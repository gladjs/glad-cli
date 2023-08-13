/**
 * The {{class_name}} Model
 *
 * @module models/{{lower_name}}
 * @version 0.0.1
 */

import mongoose from "mongoose";

const {{lower_name}} = new mongoose.Schema({
  // Edit Your Model Here
});

mongoose.model("{{lower_name}}", {{lower_name}});
export default mongoose.model("{{lower_name}}");
