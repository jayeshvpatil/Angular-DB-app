//@ sourceURL=vzReportDirective.js
'use strict';
angular.module('vzDb').directive('vzBarChart',['dataService',function(dataService){
  return{
    templateUrl:'scripts/vzWidgets/vzBarChartTemplate.html',
    link:function(scope,el,attrs){
      scope.isLoaded=false;
      scope.hasError=false;
      scope.selectedData=null;
      scope.loadData= function(){
        scope.hasError=false;
        dataService.getbardata(scope.item.widgetSettings.id).then(function(data){
          scope.selectedData=data;
         //console.log(data.chartdata);
          scope.isLoaded=true;
          scope.hasError=false;

        },function(err){
          scope.hasError=true;
        });
      }	;
      var colorArray = ['#FF0000', '#0000FF', '#FFFF00', '#00FFFF'];
      scope.colorFunction = function() {
        return function(d, i) {
          return colorArray[i];
        };
      };
      scope.toolTipContentFunction = function(){
        return function(key, x, y, e, graph) {
          return  'Tooltip' +
            '<h1>' + key + '</h1>' +
            '<p>' +  y + ' at ' + x + '</p>'
        };
      };
      scope.loadData();
    }
  };

}]);
