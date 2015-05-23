'use strict';

/**
 * @ngdoc function
 * @name concreteDevApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the concreteDevApp
 */
angular.module('concreteDevApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
