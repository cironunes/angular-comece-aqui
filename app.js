'use strict';

angular.module('myApp', []);

angular.module('myApp')
  .factory('TodoFactory', function() {
    var todos = [
      { text: 'Go to the mall', done: false },
      { text: 'Study AngularJS', done: false }
    ];

    return {
      todos: todos
    };
  });

angular.module('myApp')
  .filter('dash', function() {
    return function(text) {
      return text.split(' ').join('-');
    };
  });

angular.module('myApp')
  .controller('MyCtrl', function(TodoFactory) {
    this.items = TodoFactory.todos;
  });

