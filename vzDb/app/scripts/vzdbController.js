'use strict';
angular.module('vzDb').controller('vzdbController',['$scope',function($scope){
  $scope.state='unauthorized';
  $scope.signIn=function(){
    $scope.state='authorized';
  };
}]);
