'use strict';

angular.module('vzDb').directive('vzDashboard', ['$localStorage', function ($localStorage) {
  return {
    scope: {},
    template: '<ps-dashboard></ps-dashboard>',
    link: function (scope) {
      scope.title = 'Dashboard Demo';
      scope.gridsterOpts = {
        column: 12,
        margins: [20, 20],
        outerMargin: false,
        pushing: true,
        floating: true,
        swapping: false,
        isMobile: true

      };
      scope.widgetDefinitions = [
        {
          title: 'Widget1',
          settings: {
            sizeX: 3, sizeY: 3, minSizeX: 2, minSizeY: 2,
            template: '<vz-report></vz-report>',
            widgetSettings: {
              id: 1000,
              templateUrl: 'scripts/FilterDialog/vzFilterReportData.html',
              controller: 'vzFilterReportController'
            }
          }
        },
        {
          title: 'Bar Chart',
          settings: {
            sizeX: 3, sizeY: 3, minSizeX: 2, minSizeY: 2,
            template: '<vz-bar-chart></vz-bar-chart>',
            widgetSettings: {
              id: 2000,
              templateUrl: 'scripts/FilterDialog/vzFilterBarData.html',
              controller: 'vzFilterBarController'
            }
          }
        }
      ];
      scope.widgets = $localStorage.widgets || [];
      scope.$watch('widgets', function () {
        $localStorage.widgets = scope.widgets;
      }, true);
    }
  };
}]);
