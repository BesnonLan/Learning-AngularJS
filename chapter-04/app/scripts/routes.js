define(['angular', 'app'], function(angular, app) {
  'use strict';

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'ListController',
        resolve: {
          recipes: ["MultiRecipeLoader", function (MultiRecipeLoader) {
            return MultiRecipeLoader();
          }]
        },
        templateUrl: '/views/list.html'
      })
      .when('/view/:recipeId', {
        controller: 'ViewController',
        resolve: {
          recipe: ["RecipeLoader", function(RecipeLoader) {
            return RecipeLoader();
          }]
        },
        templateUrl: '/views/viewRecipe.html'
      })
  }]);
});
