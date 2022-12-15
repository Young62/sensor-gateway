'use strict';

const controller = require('./controller');

module.exports = function(app) {
    app.route('/about')
        .get(controller.about);
    app.route('/sensors')
        .get(controller.getSensors);
    app.route('/sensor/:id')
        .get(controller.getSensor);
    app.route('/sensor/:id')
        .post(controller.postSensor);
};
