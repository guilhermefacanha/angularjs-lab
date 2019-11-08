app.controller('UserController', function ($scope, $http, $filter, $routeParams, $rootScope, REST_API, userResource) {
    $scope.users = [];
    $scope.cities = [];
    $scope.user;
    $scope.filter = '';
    
    $scope.msginfo='';
    $scope.msgerro='';
    
    $scope.editId = $routeParams.userId;
    
    userResource.query({action:'all'},function(data) {
    	$scope.users = data;
    }, function(error) {
    	console.log(error);
	} );
    
    userResource.query({action:'cities'}, function(data) {
    	$scope.cities = data;
    	$scope.cities.sort();
    }, function(error) {
    	console.log(error);
	})

	$scope.generateUser = function() {
    	userResource.get({action:'generate'}, function(data) {
    		$scope.msginfo = 'User generated';
    		$scope.user = data;
    	}, function(error) {
    		console.log(error);
		} );
    }

    
    $scope.save = function() {
    	if($scope.form.$valid){
    		$scope.user.birthDate = new Date($scope.user.birthDate);
    		$scope.user.salary = Number($scope.user.salary.replace(/[^0-9.-]+/g,""));
    		
    		userResource.save({action: "save"}, $scope.user, function(data) {
    			$scope.user = {};
    			$scope.msginfo = 'User saved with id '+data.id;
    		}, function(error) {
    			$scope.msgerro = 'Error saving User: '+JSON.stringify(error);
			});
    	}
	}
    
    if($scope.editId>0){
    	userResource.get({action:'get',userId:$scope.editId}, function(data) {
    		$scope.user = data;
    	}, function(error) {
    		$scope.msgerro = 'Error fetching User: '+JSON.stringify(error);
		} );
    }
    
    $scope.remove = function(user) {
    	userResource.delete({action:'delete',userId:user.id}, function(data) {
    		$scope.msginfo = data.message;
    		var idxUser = $scope.users.indexOf(user);
    		$scope.users.splice(idxUser, 1);
    	}, function(error) {
    		$scope.msgerro = JSON.stringify(error);
		});
	}

});