'use strict';
angular.module('psFramework').controller('psFrameworkController',['$scope','$rootScope','$window','$timeout', '$location',
	function($scope,$rootScope,$window,$timeout,$location){
		$scope.isMenuVertical=true;
		$scope.isMenuVisible=true;
		$scope.isMenuButtonVisible=true;

		$scope.$on('ps-menu-item-selected-event',function(evt,data){
			$scope.routeString=data.route;
			$location.path(data.route);
		checkwidth();
			broadcastMenuState();
		});

		$scope.$on('ps-menu-orientation-changed-event',function(evt,data){
		$scope.isMenuVertical=data.isMenuVertical;

		});


	$($window).on('resize.psFramework', function(){
	$scope.$apply(function(){
		checkwidth();broadcastMenuState();
		});
	});

	$scope.$on('$destroy',function(){
		$($window).off('resize-psFramework');
	});

	var checkwidth=function(){
		var width=Math.max($($window).width(),$($window).innerWidth());
		$scope.isMenuVisible=(width>768);
		$scope.isMenuButtonVisible=!$scope.isMenuVisible;
	};

	$scope.menuButtonClicked=function(){
		$scope.isMenuVisible=!$scope.isMenuVisible;
		broadcastMenuState();
		//$scope.$apply();
	}

	var broadcastMenuState=function(){
		$rootScope.$broadcast('ps-menu-show',{
			show:$scope.isMenuVisible,
			isVertical:$scope.isMenuVertical,
			allowHorizontalToggle:!$scope.isMenuButtonVisible
		});
	};

    $scope.html2pdf=function(){
      
    }

	$timeout(function(){
		checkwidth();
	},0);

}
]);
