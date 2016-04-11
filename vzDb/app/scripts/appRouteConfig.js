'use strict';
angular.module('vzDb').config(['$routeProvider',function($routeProvider){
	var routes=[
	{
		url:'/dashboard',
		config:{
			template:'<vz-dashboard></vz-dashboard>'
		}
	},
	{
		url:'/trend',
		config:{
			template:'<vz-trend></vz-trend>'
		}
	},
	{
		url:'/summary',
		config:{
			template:'<vz-detail></vz-detail>'
		}
	}
	];

	routes.forEach(function(route){
		$routeProvider.when(route.url,route.config);
			$routeProvider.otherwise({redirectTo:'/dashboard'});
	});


}]);
