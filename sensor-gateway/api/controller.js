'use strict';

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('../sesnsor.db');
var properties = require('../package.json');


var sensors = [
    {id: 1, temp: 3, location: [1, 2]},
    {id: 2, temp: 4, location: [2, 4]}
]


var controllers = {
   about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version
       }
       res.json(aboutInfo);
   },
   getSensors: function(req, res) {
        res.json(sensors)
    },
    getSensor: function(req, res) {
        console.log('the request', req.params);
         var selectedSensors = sensors.filter(sensor => sensor.id == req.params.id);
         console.log('selectedSensors:', selectedSensors);
         res.json(selectedSensors);
     },
     postSensor: function(req, res) {
        var sensor = req.body;
        sensors.push(sensor);
        res.json({status: 'accepted'});
     }
};

module.exports = controllers;
