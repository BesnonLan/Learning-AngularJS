define(['angular', 'services'], function (angular) {
  'use strict';

  return angular.module('GethubApp.controllers', ['GethubApp.services'])
    .controller('ListController', ['$scope', 'recipes', function($scope, recipes) {
      $scope.recipes = recipes;
    }])
    .controller('ViewController', ['$scope', '$location', 'recipe', function($scope, $location, recipe) {
      $scope.recipe = recipe;

      $scope.edit = function() {
        $location.path('/edit/' + recipe.id);
      };
    }]);


});
