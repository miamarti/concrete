'use strict';
var $ = $ || {};

/**
 * @ngdoc function
 * @name concreteDevApp.controller:MainCtrl
 * @description
 * @author miamarti
 * # MainCtrl
 * Controller of the concreteDevApp
 */
angular.module('concreteDevApp').controller('MainCtrl', function ($scope, dribbbleService, ConfirmFactory) {
    console.log(ConfirmFactory);

    $scope.shots = [];
    $scope.page = 1;
    $scope.slectShot = {};

    var $core = {
        runningSroll: true,

        /*
         * Method main
         */
        main: function () {
            $core.getPopularShots($scope.page);
        },

        /*
         * Renders the main 'shots'
         * @param {array} shots - The shots list that appears
         */
        renderShots: function (shots) {
            shots.forEach(function (obj) {
                $scope.shots.push(obj);
            });
            $core.setLoading(false);
            $core.runningSroll = true;
        },

        /*
         * Limpa a lista de 'shots'
         */
        clearShots: function () {
            $scope.shots = [];
            $core.runningSroll = true;
            $core.setLoading(false);
        },

        /*
         * Performs the call of the main 'shots'
         * @param {number} page - The number for paging
         */
        getPopularShots: function (page) {
            $core.setLoading(true);
            dribbbleService.getPopularShots(page).then($core.renderShots, $core.clearShots);
        },

        /*
         * Makes calling a 'shot' by ID
         * @param {number} id - The number for Shot Id
         */
        getDetails: function (id) {
            dribbbleService.getShot(id).then(function (shot) {
                $scope.slectShot = shot;
                $('.basic.shot.modal').modal('show');
            });
        },

        /*
         * Shows the 'Loading ...'
         */
        setLoading: function (status) {
            $scope.loading = status ? 'active' : '';
        },


        /*
         * Loads more 'shots at the bottom'
         */
        loadMore: function () {
            if ($core.runningSroll) {
                $scope.page++;
                $core.runningSroll = false;
                $core.getPopularShots($scope.page);
            }
        }
    };

    $scope.loadMore = $core.loadMore;
    $scope.getDetails = $core.getDetails;
    $core.main();
});
