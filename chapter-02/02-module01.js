var module01 = angular.module('module01', []);

module01.controller('CartController', function($scope, ItemsModule) {
  $scope.items = ItemsModule.getAll();
});

module01.factory('ItemsModule', function() {
  var itemsModule = {};

  itemsModule.getAll = function() {
    //This information should be got from a server.
    return [
      {title : 'Paint pots', quantity: 8, price: 3.95},
      {title : 'Polka bots', quantity: 17, price: 6.98},
      {title : 'Pebbles', quantity: 5, price: 5.56},
    ];
  };

  return itemsModule;
});


