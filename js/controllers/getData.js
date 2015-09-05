angular.module("myApp")
	.controller('getData', ['$scope','$http','myFactory', function($scope,$http,myFactory){
		myFactory.getData().success(function(data){
			$scope.data = data;
		}).catch(function(err){
			console.log(err);
		}); 
	}]);