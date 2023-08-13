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

  async Get () {
    this.res.status(500).json({ err: 'not implemented' });
  }

  async FindOne () {
    this.res.status(500).json({ err: 'not implemented' });
  }

  async Post () {
    this.res.status(500).json({ err: 'not implemented' });
  }

  async Put () {
    this.res.status(500).json({ err: 'not implemented' });
  }

  async Delete () {
    this.res.status(500).json({ err: 'not implemented' });
  }

}

export default {{class_name}}Controller;
