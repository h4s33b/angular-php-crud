var myApp = angular.module("myApp",['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");
	$stateProvider
    .state('/', {
      url: "/",
      templateUrl: "templates/getData.html",
      controller: "getData"
    }).state('/setData', {
      url: "/setData",
      templateUrl: "templates/setData.html",
      controller: "setData"
    }).state('getSingleRecord',{
    	url : "/getSingleRecord/{rid}",
    	templateUrl: "templates/getSingleRecord.html",
    	controller : "getSingleRecord"
    });
}])