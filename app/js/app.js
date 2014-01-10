angular.module("myApp",['ngRoute']);
var app = angular.module("myApp");

app.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider
      .when('/', {
        controller: 'TodoListCtrl',
        templateUrl: "partials/playground.html"
      })
      .when('/user',{
        controller: 'UserLoginCtrl',
        templateUrl: 'partials/user.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);

app.controller('TodoListCtrl', function($scope) {
  $scope.todoList = [];

  $scope.addTodo = function() {
    var newTodo = $scope.todoInput.trim();
    if(newTodo != ""){
    $scope.todoList.push({
      name: newTodo
    });
    $scope.todoInput = "";
  };
};

  $scope.deleteTodo = function(index) {
    $scope.todoList.splice(index, 1);
  };
});