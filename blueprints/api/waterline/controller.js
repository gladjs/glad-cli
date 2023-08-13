/**
 * {{class_name}}Controller is a controller for the {{class_name}} resource.
 *
 * @module controllers/{{lower_name}}
 * @version 0.0.1
 */

class {{class_name}}Controller extends Glad.Controller {

  Get () {
    {{class_name}}.find()
      .sort({id : -1})
      .limit(30)
      .then({{plural_lower_name}} => this.res.json({{plural_lower_name}}))
      .catch(err => this.error(err))
  }

  FindOne () {
    {{class_name}}.findOneById(this.params.id)
      .then({{lower_name}} => this.res.json({{lower_name}}))
      .catch(err => this.error(err));
  }

  Post () {
    {{class_name}}.create(this.body)
      .then({{lower_name}} => this.res.status(201).json({{lower_name}}))
      .catch(err => this.error(err));
  }

  Put () {
    {{class_name}}.update(this.params.id, this.body)
      .then({{lower_name}} => this.res.json({{lower_name}}))
      .catch(err => this.error(err));
  }

  Delete () {
    {{class_name}}.destroy(this.params.id)
      .then(removals => this.res.status(204).send())
      .catch(err => this.error(err));
  }

}

export default {{class_name}}Controller;
