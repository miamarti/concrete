'use strict';

/**
 * @ngdoc function
 * @name concreteDevApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the concreteDevApp
 */
angular.module('concreteDevApp').controller('MainCtrl', function ($scope, dribbbleService) {

    var $core = {
        main: function () {
            this.getPopularShots();
        },

        getPopularShots: function () {
            dribbbleService.getPopularShots().success(function (data) {
                console.log(data);
            }).error(function (e) {});
        }
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.loadMore = function () {
        alert('Yes');
    };

    $core.main();
});