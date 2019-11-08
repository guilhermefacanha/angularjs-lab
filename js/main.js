var app = angular.module('angularjs-lab', [ 'ngAnimate', 'ngRoute' ,'ngResource' ]);

app.constant("REST_API", "http://localhost:8080");

app.config(function($routeProvider, $locationProvider) {
	
	$routeProvider.when('/', {
		templateUrl : "partials/principal.html",
		controller : "UserController"
	});
	
	$routeProvider.when('/users', {
		templateUrl : "partials/principal.html",
		controller : "UserController"
	});

	$routeProvider.when('/users/new', {
		templateUrl : "partials/user_new.html",
		controller : "UserController"
	});

	$routeProvider.when('/users/edit/:userId', {
		templateUrl : "partials/user_new.html",
		controller : "UserController"
	});

	$routeProvider.when('/notfound', {
		templateUrl : "partials/notfound.html"
	});
	
	$routeProvider.otherwise({redirectTo: "/notfound"});

//	$locationProvider.html5Mode(true);
});