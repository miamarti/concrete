'use strict';

/**
 * @name concreteDevApp.factory:dribbbleService
 * @author miamarti
 */
angular.module('concreteDevApp').factory('dribbbleService', ['$http', '$q', function ($http, $q) {

    /*jshint camelcase: false */
    var dribbbleService = {
        access_token: 'e90d315594bc7d941db90544b1440ea22fecd5327e2a6f37a91977fbd0915e6c',
        token_type: 'concreteDevApp',
        url: 'https://api.dribbble.com/v1/shots/'
    };

    /*
     * Performs the call of the main 'shots'
     * @param {number} page - The number for paging
     * @return {object} $q
     */
    dribbbleService.getPopularShots = function (page) {
        var deferred = $q.defer();
        /*jshint camelcase: false */
        $http.get(dribbbleService.url, {
            params: {
                page: page,
                sort: 'views',
                access_token: dribbbleService.access_token,
                token_type: dribbbleService.token_type
            }
        }).success(function (data) {
            deferred.resolve(data);
        }).error(function (e) {
            deferred.reject(e);
        });
        return deferred.promise;
    };

    /*
     * Makes calling a 'shot' by ID
     * @param {number} id - The number for Shot Id
     * @return {object} $q
     */
    dribbbleService.getShot = function (id) {
        var deferred = $q.defer();
        /*jshint camelcase: false */
        $http.get(dribbbleService.url + id, {
            params: {
                access_token: dribbbleService.access_token,
                token_type: dribbbleService.token_type
            }
        }).success(function (data) {
            deferred.resolve(data);
        }).error(function (e) {
            deferred.reject(e);
        });
        return deferred.promise;
    };

    return dribbbleService;
}]);