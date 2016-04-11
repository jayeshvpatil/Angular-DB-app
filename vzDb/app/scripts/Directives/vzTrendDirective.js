'use strict';

angular.module('vzDb').directive('vzTrend',['dataService','$timeout',function(dataService,$timeout){
	return {
    scope:{
    },
		templateUrl:'scripts/Directives/vzTrendTemplate.html',
    link:function($scope, elm, attr){
      $scope.gridsterOpts= {
        // 	column:12,
        // 	margins:[20,20],
        // 	outerMargin:false,
        // 	pushing:true,
        // 	floating:true,
        // 	swapping:false,
       isMobile:true,
        margins: [20, 20],
        columns: 4,

        mobileModeEnabled: false,
        draggable: {
          handle: 'h3'
        },
        resizable: {
          enabled: true,
          handles: ['n', 'e', 's', 'w', 'ne', 'se', 'sw', 'nw'],

          // optional callback fired when resize is started
          start: function (event, $element, widget) {
          },

          // optional callback fired when item is resized,
          resize: function (event, $element, widget) {
            if (widget.chart.api) widget.chart.api.update();
          },

          // optional callback fired when item is finished resizing
          stop: function (event, $element, widget) {
            $timeout(function () {
              if (widget.chart.api) widget.chart.api.update();
            }, 400)
          }
        }
      };

        $scope.dashboard = {
        widgets: [{
          col: 0,
          row: 0,
          sizeY: 2,
          sizeX: 2,
          name: "Discrete Bar Chart",
          chart: {
            options: dataService.discreteBarChart.options(),
            data: dataService.discreteBarChart.data(),
            api: {}
          }
        },  {
          col: 0,
          row: 2,
          sizeY: 2,
          sizeX: 3,
          name: "Line Chart",
          chart: {
            options: dataService.lineChart.options(),
            data: dataService.lineChart.data(),
            api: {}
          }
        }, {
          col: 4,
          row: 2,
          sizeY: 1,
          sizeX: 1,
          name: "Pie Chart",
          chart: {
            options: dataService.pieChart.options(),
            data: dataService.pieChart.data(),
            api: {}
          }
        }]
      };
// We want to manually handle `window.resize` event in each directive.
      // So that we emulate `resize` event using $broadcast method and internally subscribe to this event in each directive
      // Define event handler
      $scope.events = {
        resize: function(e, scope){
          $timeout(function(){
            scope.api.update()
          },200)
        }
      };
      angular.element(window).on('resize', function(e){
        $scope.$broadcast('resize');
      });
      $scope.config = {
        visible: false
      };
      $timeout(function(){
        $scope.config.visible = true;
      }, 200);
    }
    };





}]);
