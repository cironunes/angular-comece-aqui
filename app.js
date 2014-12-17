'use strict';

angular.module('myApp', []);

angular.module('myApp')
  .factory('TodoFactory', function() {
    var todos = [
      { text: 'Go to the mall', done: false },
      { text: 'Study AngularJS', done: false }
    ];

    function add(newItem) {
      newItem.done = newItem.done || false;

      todos.push(newItem);
    }

    return {
      todos: todos,
      add: add
    };
  });

angular.module('myApp')
  .filter('dash', function() {
    return function(text) {
      return text.split(' ').join('-');
    };
  });

angular.module('myApp')
  .controller('MyCtrl', function(TodoFactory, $scope) {
    this.items = TodoFactory.todos;

    this.addItem = function(newItem) {
      TodoFactory.add(newItem);
      $scope.newItem = {};
    };
  });

angular.module('myApp')
  .directive('myTodo', function(TodoFactory) {
    return {
      restrict: 'EA',
      templateUrl: 'todo.html',
      //template: '<input type="checkbox" ng-model="item.done"> {{ item.text | dash }}',
      scope: {
        item: '=',
        text: '@'
      },
      link: function($scope, $elem, $attrs, myCtrl) {
        $elem.on('click', function() {
          $elem.toggleClass('alert alert-warning');
        });
      }
    };
  });

