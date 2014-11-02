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
  .controller('MyCtrl', function(TodoFactory) {
    this.items = TodoFactory.todos;
  });


angular.module('myApp')
  .controller('MyCtrl2', function(TodoFactory) {
    this.items = TodoFactory.todos;
  });
