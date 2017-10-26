var myApp = angular.module("app", []);

myApp.controller("DateController",function($scope){
 $scope.value = new Date();
 
	});
function TodoCtrl($scope){
 
	$scope.todos=[
	{text:'Learn AngularJS',done:false},
	{text:'Build an app',done:false}
	];
	
	
	$scope.TotalTodos=function(){
		return $scope.todos.length;
		};
	
	$scope.clearCompleted=function(){
		$scope.todos=_.filter($scope.todos, function(todo){
			return !todo.done;
			})
		};
	
	$scope.addTodo=function(){
		$scope.todos.push({text:$scope.formTodoText,done:false});
		$scope.formTodoText='';
		};
	}
