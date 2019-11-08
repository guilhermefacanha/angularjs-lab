angular.module('angularjs-lab').controller('UserController', function ($scope,$http,REST_API) {
    $scope.users = [];
    $scope.filter = '';

    $http.get(REST_API+'/api/users/all')
    .success(function (data) {
        $scope.users = data;
    }).error(function(error) {
        console.log(error);
    });

});