'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$scope', '$location', function($scope, $location) {
  $scope.login = function() {
    if ($scope.username === 'bbc' && $scope.password === '123') {
      $location.path('/view1');
    } else {
      $scope.error = 'Wrong username or password';
    }
  };
}]);
