'use strict';
module.exports = function(app) {
    var image_controller = require('../controllers/image_controller');

  // Image routes
    app.route('/Images/:id')
        .get(image_controller.image_by_id);
    app.route('/Images/')
        .get(image_controller.image_all);

  // Quotes routes
  app.route('/Quotes/:id')
  .get(quotes_controller.quotes_by_id);
};