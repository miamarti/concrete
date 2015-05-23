angular.module('concreteDevApp').factory('dribbbleService', ['$http', function ($http) {

    var dribbbleService = {};

    dribbbleService.getPopularShots = function () {
        return $http.get('http://api.dribbble.com/shots/popular', {
            params: {
                page: 1
            }
        });
    };

    return dribbbleService;
}]);