define(['controllers'], function() {
  'use strict';

  describe("Controllers", function() {

    beforeEach(module('GethubApp'));

    describe("ListController", function() {
      var $scope, controller;

      beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        controller = $controller('ListController', {
          $scope : $scope,
          recipes : [1, 2, 3]
        })
      }));

      it("should have list of recipes", function() {
        expect($scope.recipes).toEqual([1, 2, 3]);
      });
    });

  });

});
