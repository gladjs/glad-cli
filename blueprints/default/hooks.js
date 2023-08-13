export default {

  onAfterController (req, res) {
    console.log('Hook: onAfterController');
  },

  onAfterGET (req, res) {
    console.log('Hook: onAfterGET');
  },

  onAfterPOST (req, res) {
    console.log('Hook: onAfterPOST');
  },

  onAfterPUT (req) {
    console.log('Hook: onAfterPUT');
  },

  onAfterDELETE (req, res) {
    console.log('Hook: onAfterDELETE');
  }
};
