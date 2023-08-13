/**
 * The {{class_name}} Model
 *
 * @module models/{{lower_name}}
 * @version 0.0.1
 */

import Waterline from 'waterline';

let {{class_name}} = Waterline.Collection.extend({
  identity: '{{lower_name}}',
  connection: '{{adapter}}',
  attributes: {}
});

export default {{class_name}};
