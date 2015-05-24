'use strict';
var moment = moment || {};

String.prototype.formatDate = function () {
    return moment(this.toString()).format('LL');
};

/**
 * @ngdoc overview
 * @name concreteDevApp
 * @description
 * @author miamarti
 * # concreteDevApp
 *
 * Main module of the application.
 */
angular.module('concreteDevApp', ['ngAnimate', 'ngAria', 'ngCookies', 'ngMessages', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch']).config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    }).otherwise({
        redirectTo: '/'
    });
});