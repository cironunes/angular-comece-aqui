'use strict';

angular.module('myApp', [])

angular.module('myApp')
  .controller('MyCtrl', function() {
    this.name = 'José';

    this.changeToCiro = function() {
      this.name = 'Ciro';
    };
  });
