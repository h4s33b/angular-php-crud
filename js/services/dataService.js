angular.module("myApp")
	.factory('myFactory', ['$http', function($http){
		
		myFactory = {};

		function _getData(){
			return $http({method:'GET',url : 'getData.php'});
		}
		function _getDataByID(rid){
			console.log(rid);
			return $http({method:'GET',url : 'getDataByID.php?id='+rid});
		}

		return{
			getData : _getData,
			getDataByID : _getDataByID	
		};
	}]);