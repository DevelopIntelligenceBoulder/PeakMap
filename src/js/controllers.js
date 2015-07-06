"use strict";

/**
 * Controllers module which defines controllers.
 * @module myApp/controllers
 */
var app = angular.module("myApp.controllers", ["ngRoute"]);

// Survey controller
app.controller("homeCtrl", ["$scope",
  function($scope) {

    $scope.peaks = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-106.4454,
                39.1178
              ]
            },
            "properties": {
              "rank": "1",
              "peakName": "Mount Elbert",
              "range": "Sawatch Range",
              "Elevation": "14,440 ft\n4401 m",
              "Prominence": "9,093 ft\n2772 m",
              "Isolation": "671 mi\n1,079 km"
            }
          }, {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-106.4757,
                39.1875
              ]
            },
            "properties": {
              "rank": "2",
              "peakName": "Mount Massive",
              "range": "Sawatch Range",
              "Elevation": "14,428 ft\n4398 m",
              "Prominence": "1,961 ft\n598 m",
              "Isolation": "5.1 mi\n8.1 km"
            }
          }, {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-106.3207,
                38.9244
              ]
            },
            "properties": {
              "rank": "3",
              "peakName": "Mount Harvard",
              "range": "Sawatch Range",
              "Elevation": "14,421 ft\n4396 m",
              "Prominence": "2,360 ft\n719 m",
              "Isolation": "15 mi\n24 km"
            }
          }, {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-106.4729,
                39.0294
              ]
            },
            "properties": {
              "rank": "4",
              "peakName": "La Plata Peak",
              "range": "Sawatch Range",
              "Elevation": "14,368 ft\n4379 m",
              "Prominence": "1,861 ft\n567 m",
              "Isolation": "6 mi\n10 km"
            }
          }, {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-105.4856,
                37.5775
              ]
            },
            "properties": {
              "rank": "5",
              "peakName": "Blanca Peak",
              "range": "Sangre de Cristo Mountains",
              "Elevation": "14,351 ft\n4374 m",
              "Prominence": "5,326 ft\n1623 m",
              "Isolation": "103 mi\n166 km"
            }
          }, {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-107.4621,
                38.0717
              ]
            },
            "properties": {
              "rank": "6",
              "peakName": "Uncompahgre Peak",
              "range": "San Juan Mountains",
              "Elevation": "14,321 ft\n4365 m",
              "Prominence": "4,277 ft\n1304 m",
              "Isolation": "85 mi\n137 km"
            }
          }, {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-105.5855,
                37.9668
              ]
            },
            "properties": {
              "rank": "7",
              "peakName": "Crestone Peak",
              "range": "Sangre de Cristo Mountains",
              "Elevation": "14,300 ft\n4359 m",
              "Prominence": "4,554 ft\n1388 m",
              "Isolation": "27 mi\n44 km"
            }
          }, {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-106.1116,
                39.3515
              ]
            },
            "properties": {
              "rank": "8",
              "peakName": "Mount Lincoln",
              "range": "Mosquito Range",
              "Elevation": "14,293 ft\n4357 m",
              "Prominence": "3,862 ft\n1177 m",
              "Isolation": "23 mi\n36 km"
            }
          }
        ]
      } // peaks

  }
]);

// Login controller
app.controller("aboutCtrl", ["$scope", "$location",
  function($scope, $location) {

    // temporary email and password placeholder
    $scope.email = "email@mydomain.com";
    $scope.password = "password";



  }
]);
