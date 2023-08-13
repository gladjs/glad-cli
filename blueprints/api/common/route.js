/**
 * {{class_name}} Route is the router for the {{class_name}} resource.
 * All endpoints route to actions on the {{class_name}}Controller
 * @module routes/{{lower_name}}
 * @version 0.0.1
 */

export default {

  GET : [{
    path : '/{{plural_lower_name}}',
    action : 'Get'
  },
  {
    path : '/{{plural_lower_name}}/:id',
    action : 'FindOne'
  }],

  POST : [{
    path : '/{{plural_lower_name}}',
    action : 'Post'
  }],

  PUT : [{
    path : '/{{plural_lower_name}}/:id',
    action : 'Put'
  }],

  DELETE : [{
    path : '/{{plural_lower_name}}/:id',
    action : 'Delete'
  }]

};
