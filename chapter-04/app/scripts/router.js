'use strict';

GethubApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'ListCtrl',
      resolve: {
        recipes: ["MultiRecipeLoader", function (MultiRecipeLoader) {
          return MultiRecipeLoader();
        }]
      },
      templateUrl: '/views/list.html'
    })
}]);
