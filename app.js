'use strict';

angular.module('myApp', [])

angular.module('myApp')
  .controller('MyCtrl', function($scope) {
    $scope.name = 'José';

    $scope.changeToCiro = function() {
      $scope.name = 'Ciro';
    };
  });
