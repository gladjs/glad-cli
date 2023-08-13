/**
 * {{class_name}}Controller is a controller for the {{class_name}} resource.
 *
 * @module controllers/{{lower_name}}
 * @version 0.0.1
 */

import {{class_name}} from "../models/{{lower_name}}.js";

class {{class_name}}Controller extends Glad.Controller {

  async Get () {
    try {
      const {{plural_lower_name}} = await {{class_name}}.find()
      this.res.json({{plural_lower_name}})
    } catch (err) {
      this.error(err)
    }
  }

  async FindOne () {
    try{
      const {{lower_name}} = await {{class_name}}.findOne({ _id: this.params.id})
      this.res.json({{lower_name}})
    } catch (err) {
      this.error(err)
    }
  }

  async Post () {
    try {
      const {{lower_name}} = new {{class_name}}(this.body)
      await {{lower_name}}.save()
      this.res.status(201).json({{lower_name}})
    } catch (err) {
      this.error(err)
    }
  }

  async Put () {
    try {
      const {{lower_name}} = {{class_name}}.findOneAndUpdate({_id: this.params.id}, this.body)
      this.res.json({{lower_name}})
    } catch (err) {
      this.error(err)
    }
  }

  async Delete () {
    try {
      const {{lower_name}} = await {{class_name}}.findOne({_id: this.params.id})
      const result = await {{lower_name}}.remove()
      this.res.status(204).send()
    } catch (err) {
      this.error(err)
    }
  }

}

export default {{class_name}}Controller;
