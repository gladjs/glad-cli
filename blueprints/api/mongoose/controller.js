/**
 * {{class_name}}Controller is a controller for the {{class_name}} resource.
 *
 * @module controllers/{{lower_name}}
 * @version 0.0.1
 */

class {{class_name}}Controller extends Glad.Controller {

  Get () {
    {{class_name}}.find((err, {{plural_lower_name}}) => {
      if (err) {
        this.error(err);
      } else {
        this.res.json({{plural_lower_name}});
      }
    });
  }

  FindOne () {
    {{class_name}}.findOne({ _id: this.params.id})
      .exec((err, {{lower_name}}) => {
        if (err) {
          this.error(err);
        } else {
          this.res.json.json({{lower_name}});
        }
      });
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

module.exports = {{class_name}}Controller;
