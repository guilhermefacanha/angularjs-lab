app
.factory('userResource',
		function($resource, REST_API) {
			return $resource(REST_API+'/api/users/:action/:userId',{},{
				get:{
					method: "GET",
					isArray: false
				}
			});
		});