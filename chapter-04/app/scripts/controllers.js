'use strict';

GethubApp.controller('ListCtrl', ['$scope', 'recipes', function($scope, recipes) {
  $scope.recipes = recipes;
}]);
