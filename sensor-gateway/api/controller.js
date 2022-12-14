'use strict';

var properties = require('../package.json');

var controllers = {
   about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version
       }
       res.json(aboutInfo);
   },
   getDistance: function(req, res) {
                var distanceInfo = [
                        {id: 1, distance: 3},
                        {id: 2, distance: 4}
                ]
                res.json(distanceInfo)
        }
};

module.exports = controllers;
