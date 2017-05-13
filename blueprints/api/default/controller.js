/**
 * {{class_name}}Controller is a controller for the {{class_name}} resource.
 *
 * Your project is not using mongoose or waterline.
 * The controller is still mandatory but Glad can not
 * default a working API.
 *
 * @module controllers/{{lower_name}}
 * @version 0.0.1
 */

class {{class_name}}Controller extends Glad.Controller {

  Get () {
    this.res.status(500).json({ err: 'not implemented' });
  }

  FindOne () {
    this.res.status(500).json({ err: 'not implemented' });
  }

  Post () {
    this.res.status(500).json({ err: 'not implemented' });
  }

  Put () {
    this.res.status(500).json({ err: 'not implemented' });
  }

  Delete () {
    this.res.status(500).json({ err: 'not implemented' });
  }

}

module.exports = {{class_name}}Controller;
