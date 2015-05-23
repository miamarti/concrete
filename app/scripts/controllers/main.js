'use strict';

/**
 * @ngdoc function
 * @name concreteDevApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the concreteDevApp
 */
angular.module('concreteDevApp').controller('MainCtrl', function ($scope, dribbbleService) {
    $scope.shots = [];
    $scope.page = 1;
    $scope.slectShot = {};

    var $core = {
        runningSroll: true,

        main: function () {
            this.getPopularShots($scope.page);
        },

        getPopularShots: function (page) {
            $core.setLoading(true);
            dribbbleService.getPopularShots(page).success(function (shots) {
                shots.forEach(function (obj) {
                    $scope.shots.push(obj);
                });
                $core.setLoading(false);
                $core.runningSroll = true;
            }).error(function (e) {
                $scope.shots = [];
                $core.runningSroll = true;
                $core.setLoading(false);
            });
        },

        getDetails: function (id) {
            dribbbleService.getShot(id).success(function (shot) {
                $scope.slectShot = shot;
                console.log($scope.slectShot.bio);
                $('.basic.shot.modal').modal('show');
            }).error(function (e) {});
        },

        setLoading: function (status) {
            $scope.loading = status ? 'active' : '';
        },

        loadMore: function () {
            if ($core.runningSroll) {
                $scope.page++;
                $core.runningSroll = false;
                $core.getPopularShots($scope.page);
            }
        }
    };

    $scope.loadMore = $core.loadMore.bind($core);
    $scope.getDetails = $core.getDetails.bind($core);
    $core.main();
});