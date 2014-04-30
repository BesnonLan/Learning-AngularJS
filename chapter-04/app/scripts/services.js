define(['angular', 'services', 'angularResource'], function (angular) {
  'use strict';

  var services = angular.module('GethubApp.services', ['ngResource']);

  services.factory('Recipe', ['$resource',
    function($resource) {
      return $resource('/recipes/:id', {id: '@id'});
  }]);

  services.factory('MultiRecipeLoader', ['Recipe', '$q',
    function(Recipe, $q) {
      return function() {
        var delay = $q.defer();

        Recipe.query(function (recipes) {
          delay.resolve(recipes);
        }, function () {
          delay.reject('unable to fetch recipes.');
        });

        return delay.promise;
      };
  }]);

  return services;
});
