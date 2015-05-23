angular.module('concreteDevApp').factory('dribbbleService', ['$http', function ($http) {

    var dribbbleService = {
        access_token: 'e90d315594bc7d941db90544b1440ea22fecd5327e2a6f37a91977fbd0915e6c',
        token_type: 'concreteDevApp'
    };

    dribbbleService.getPopularShots = function (page) {
        return $http.get('https://api.dribbble.com/v1/shots', {
            params: {
                page: page,
                sort: 'views',
                access_token: dribbbleService.access_token,
                token_type: dribbbleService.token_type
            }
        });
    };

    dribbbleService.getShot = function (id) {
        return $http.get('https://api.dribbble.com/v1/shots/' + id, {
            params: {
                access_token: dribbbleService.access_token,
                token_type: dribbbleService.token_type
            }
        });
    };

    return dribbbleService;
}]);