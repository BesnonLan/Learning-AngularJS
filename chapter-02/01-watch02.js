var watch01App = angular.module('watch02', []);

watch01App.controller('CartController', function($scope) {
  $scope.bill = {};

  $scope.items = [
    {title : 'Paint pots', quantity: 8, price: 3.95},
    {title : 'Polka bots', quantity: 17, price: 6.98},
    {title : 'Pebbles', quantity: 5, price: 5.56},
  ];

  var calculateTotals = function() {
    var total = 0;

    for (var i = 0; i < $scope.items.length; i++) {
      total += $scope.items[i].price * $scope.items[i].quantity;
    };

    $scope.bill.totalCart = total;
    $scope.bill.discount  = total > 100 ? 10 : 0;
    $scope.bill.subtotal  = total - $scope.bill.discount;
  };

  $scope.$watch('items', calculateTotals, true);
});
