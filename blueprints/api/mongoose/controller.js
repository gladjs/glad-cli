/**
 * {{class_name}}Controller is a controller for the {{class_name}} resource.
 *
 * @module controllers/{{lower_name}}
 * @version 0.0.1
 */

const {imports} = Glad;
const {{class_name}} = imports("{{lower_name}}Model");

class {{class_name}}Controller extends Glad.Controller {

  Get () {
    {{class_name}}.find()
      .then({{plural_lower_name}} => this.res.json({{plural_lower_name}}))
      .catch(err => this.error(err));
  }

  FindOne () {
    {{class_name}}.findOne({ _id: this.params.id})
      .then({{lower_name}} => this.res.json({{lower_name}}))
      .catch(err => this.error(err));
  }

  Post () {
    new {{class_name}}(this.body).save()
      .then({{lower_name}} => this.res.status(201).json({{lower_name}}))
      .catch(err => this.error(err));
  }

  Put () {
    {{class_name}}.findOneAndUpdate({_id: this.params.id}, this.body)
      .then({{lower_name}} => this.res.json({{lower_name}}))
      .catch(err => this.error(err));
  }

  Delete () {
    {{class_name}}.findOne({_id: this.params.id}).remove()
      .then(() => this.res.status(204).send())
      .catch(err => this.error(err));
  }

}

module.exports = {{class_name}}Controller;
