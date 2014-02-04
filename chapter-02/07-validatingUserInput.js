var validatingUserInputApp = angular.module('ValidatingUserInput', []);

validatingUserInputApp.controller('AddUserController', function($scope) {
  $scope.message = '';

  $scope.addUser = function () {
    $scope.message = 'Thanks, ' + $scope.user.firstName + ', we added you!';
  };
});
