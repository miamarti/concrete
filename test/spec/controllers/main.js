'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('concreteDevApp'));

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        scope.page = 1;

        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(MainCtrl).toBeDefined();
    });

    it('checking the calculation of numerology', function () {
        scope.getDetails(2075611);
        console.log($scope.slectShot);
        //expect(scope.kabala.nameMap).toEqual('15131 51819556 959 461 134531');
    });

    it('checking the reset calculation numerology', function () {
        //expect(scope.kabala).toEqual(null);
    });
});