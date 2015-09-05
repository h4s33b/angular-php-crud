angular.module("myApp")
	.controller('getSingleRecord', ['$scope','$http','myFactory','$stateParams', function($scope,$http,myFactory,$stateParams){
		console.log($stateParams);
		myFactory.getDataByID(Number($stateParams.rid)).success(function(data){
			$scope.data = data;
		}).catch(function(err){
			console.log(err);
		}); 
	}]);
