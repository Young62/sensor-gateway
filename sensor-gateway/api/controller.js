'use strict';

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('../sesnsor.db');
var properties = require('../package.json');


var sensors = [
    {id: '1', temp: 3, location: [1, 2]},
    {id: '2', temp: 4, location: [2, 4]},
    {id: '1', temp: 56, location: [1, 2]}
]

// const unique = (value, index, self) => {
//     return self.indexOf(value) === index
//   }

const getUniqueSensors = (arr) => {
    var tmpArr = [];
    for(var obj in arr) {
      if(tmpArr.indexOf(arr[obj].id) < 0){ 
        tmpArr.push(arr[obj].id);
      }
    }
    return tmpArr;
 }

var controllers = {
   about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version
       }
       res.json(aboutInfo);
   },
   getSensors: function(req, res) {
        const uniqueSensors = getUniqueSensors(sensors);
        res.json(uniqueSensors)
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
