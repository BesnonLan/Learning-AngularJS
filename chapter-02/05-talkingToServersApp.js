var talkingToServersApp = angular.module('TalkingToServersApp', []);

function ShoppingController($scope, $http) {
  $http.get('http://localhost:4567/products').success(function (data, status, headers, config) {
    $scope.items = data;
  })
};
