'use strict';

describe('Controller: MainCtrl', function () {
    var MainCtrl, scope;

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

    it('can get an instance of MainCtrl', function () {
        expect(MainCtrl).toBeDefined();
    });

    it('checking the load more to scroll', function () {
        scope.loadMore();
        expect(2).toEqual(scope.page);
    });
});