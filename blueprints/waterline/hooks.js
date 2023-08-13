import Waterline from 'waterline'
import diskAdapter from 'sails-disk'

const { capitalize } = Glad.string
export default {

  // This extra step is needed when using waterline
  initializeWaterline (router) {

    return new Promise( (resolve, reject) => {
      let orm = new Waterline();

      let config = {

        adapters : {
          'default' : diskAdapter,
          disk : diskAdapter
        },

        connections : {
          myLocalDisk : {
            adapter : 'disk'
          }
        },

        defaults : {
          migrate : 'alter'
        }
      };

      Object.keys(router.models).forEach(model => {
        orm.loadCollection(router.models[model]);
      });

      orm.initialize(config, function (err, models) {
        if (err) {
          reject(err);
        } else {
          Object.keys(models.collections).forEach(key => {
            global[capitalize(key)] = models.collections[key];
          });
        }
        resolve();
      });
    });
  },

  onAfterController : function (req, res) {
    console.log('Hook: onAfterController');
  },

  onAfterGET : function (req, res) {
    console.log('Hook: onAfterGET');
  },

  onAfterPOST : function (req, res) {
    console.log('Hook: onAfterPOST');
  },

  onAfterPUT : function (req) {
    console.log('Hook: onAfterPUT');
  },

  onAfterDELETE : function (req, res) {
    console.log('Hook: onAfterDELETE');
  }
};
