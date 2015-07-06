"use strict";

/**
 * App level module which depends on filters, services and so on.
 * @module myApp
 */
var app = angular.module("myApp", [
    "ngRoute", "myApp.config", "myApp.filters", "myApp.services",
    "myApp.directives", "myApp.controllers"
]);

// configure views
app.config(["$routeProvider",
    function($routeProvider) {

        $routeProvider.when("/home", {
            templateUrl: "partials/home.html",
            controller: "homeCtrl"
        });

        $routeProvider.when("/about", {
            templateUrl: "partials/about.html",
            controller: "aboutCtrl"
        });

        $routeProvider.when("/favorites", {
            templateUrl: "partials/favorites.html",
            controller: "favoritesCtrl"
        });

        $routeProvider.otherwise({redirectTo: "/home"});

    }
]);
