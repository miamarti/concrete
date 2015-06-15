angular.module('concreteDevApp').factory('ConfirmFactory', ['$q', function ($q) {
'use strict';

    var ConfirmFactory = function () {
        return $q(function (resolve, reject) {
            if (true) {
                resolve();
            } else {
                reject();
            }
        });
    };

    return ConfirmFactory;

}]);
