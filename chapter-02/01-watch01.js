var watch01App = angular.module('watch01', []);

watch01App.controller('CartController', function($scope) {
  $scope.bill = {};

  $scope.items = [
    {title : 'Paint pots', quantity: 8, price: 3.95},
    {title : 'Polka bots', quantity: 17, price: 6.98},
    {title : 'Pebbles', quantity: 5, price: 5.56},
  ];

  $scope.totalCart = function() {
    var total = 0;

    for (var i = 0; i < $scope.items.length; i++) {
      total += $scope.items[i].price * $scope.items[i].quantity;
    };

    return total;
  }

  $scope.subtotal = function() {
    return $scope.totalCart() - $scope.bill.discount;
  }

  function calculateDiscount(newValue, oldValue, scope) {
    $scope.bill.discount = newValue > 100 ? 10 : 0;
  }

  $scope.$watch($scope.totalCart, calculateDiscount);
});
