define(['angular', 'services'], function (angular) {
  'use strict';

  return angular.module('GethubApp.controllers', ['GethubApp.services'])
    .controller('ListCtrl', ['$scope', 'recipes', function($scope, recipes) {
      $scope.recipes = recipes;
    }]);
});
