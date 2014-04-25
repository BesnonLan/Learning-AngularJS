'use strict';

GethubApp.factory('Recipe', ['$resource',
  function($resource) {
    return $resource('/recipes/:id', {id: '@id'});
}]);


GethubApp.factory('MultiRecipeLoader', ['Recipe', '$q',
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
