var changingDOMApp = angular.module('ChangingDom', []);

changingDOMApp.controller('MainController', function($scope) {
  $scope.message = {text: 'nothing clicked yet'};

  $scope.clickFocused = function() {
    $scope.message.text = 'focus button clicked';
  };

  $scope.clickUnfocused = function() {
    $scope.message.text = 'unfocused button clicked';
  };
});

changingDOMApp.directive('ngbkFocus', function() {
  return {
    link : function(scope, element, attrs, controller) {
      element[0].focus();
    }
  }
});
