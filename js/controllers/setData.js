angular.module("myApp")
	.controller('setData', ['$scope','$http', function($scope,$http){
		$scope.form = {};
		$scope.formSubmit = function(formData){
			console.log(formData);
			$http({method:'POST',url : 'setData.php',data : formData}).then(function(data){
				console.log(data);
			});
		}
	}]);