'use strict';

/**
 * Filters module which defines filters for application.
 * @module myApp/filteres
 */
var app = angular.module('myApp.filters', ['ngRoute'])

/**
 * Interpolate app version.
 * @param {String} version - App version defined in services.
 */
app.filter('interpolate', ['version', function(version) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
   }
]);


app.filter('range', ['version', function(version) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
   }
]);

app.filter('unique', function() {
  return function(collection, keyname) {
        var output = [],
            keys = [];

        angular.forEach(collection, function(item) {
            var key = item.properties[keyname];
            if(keys.indexOf(key) === -1) {
                keys.push(key);
                output.push(item);
            }
        });
        return output;
     };

  });


app.filter('startsWithLetter', function () {
  return function (items, letter) {
    //console.log(items);    // to see what items it is passing in
    var filtered = [];
    var letterMatch = new RegExp(letter, 'i');
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (letterMatch.test(item.properties.peakName.substring(0, 1))) {
        filtered.push(item);
      }
    }
    return filtered;
  };
});
