angular.module('angularjs-lab').controller('UserController', function ($scope,$http,REST_API) {
    $scope.users = [];
    $scope.user;
    $scope.filter = '';

    $http.get(REST_API+'/api/users/all')
    .success(function (data) {
        $scope.users = data;
    }).error(function(error) {
        console.log(error);
    });
    
    $scope.save = function() {
		console.log('Implement function to save user: '+ JSON.stringify($scope.user));
	}

});