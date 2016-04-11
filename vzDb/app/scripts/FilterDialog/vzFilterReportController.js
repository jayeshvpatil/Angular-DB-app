'use strict';
angular.module('vzDb').controller('vzFilterReportController',['$scope','dataService', function($scope, dataService){
$scope.isLoaded=false;
  dataService.getallvzdata().then(function(data){
    $scope.vzdbdata=data;
    $scope.isLoaded=true;
    for(var i=0;i<data.length;i++)
    {
      if(data[i].id===$scope.item.widgetSettings.id)
        $scope.selectedData=data[i];
      console.log(data[i]);
    }
  });
  $scope.saveSettings=function(){
    $scope.item.widgetSettings.id=$scope.selectedData.id;
    $scope.$parent.selectedData=$scope.selectedData;
    $scope.$close();
  };
}]);
