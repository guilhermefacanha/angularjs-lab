var app = angular.module('angularjs-lab', [ 'ngAnimate', 'ngRoute' ]);

app.constant("REST_API", "http://localhost:8080");

app.config(function($routeProvider, $locationProvider) {
	
	$locationProvider.html5Mode(true);
	
	$routeProvider.when('/users', {
		templateUrl : "partials/principal.html",
		controller : "UserController"
	});
	
	$routeProvider.otherwise({redirectTo: "/users"});
});