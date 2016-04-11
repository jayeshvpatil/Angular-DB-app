'use strict';
angular.module('vzDb').controller('vzFilterBarController', ['$scope', 'dataService', function ($scope, dataService) {
  $scope.isLoaded = false;
  dataService.getallbardata().then(function (data) {
    $scope.vzbardata = data;
    $scope.isLoaded = true;
    for (var i = 0; i < data.length; i++) {
      if (data[i].id === $scope.item.widgetSettings.id)
        $scope.selectedData = data[i];
      console.log(data[i]);
    }
  });
  $scope.saveSettings = function () {
    $scope.item.widgetSettings.id = $scope.selectedData.id;
    $scope.$parent.selectedData = $scope.selectedData;
    $scope.$close();
  };
}]);
