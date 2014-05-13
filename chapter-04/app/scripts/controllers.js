define(['angular', 'services'], function (angular) {
  'use strict';

  return angular.module('GethubApp.controllers', ['GethubApp.services'])
    .controller('ListController', ['$scope', 'recipes', function($scope, recipes) {
      $scope.recipes = recipes;
    }]);
});
