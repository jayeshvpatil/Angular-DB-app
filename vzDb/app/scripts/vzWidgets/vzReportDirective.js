//@ sourceURL=vzReportDirective.js
'use strict';
angular.module('vzDb').directive('vzReport',['dataService',function(dataService){
return{
	templateUrl:'scripts/vzWidgets/vzReportTemplate.html',
	link:function(scope,el,attrs){
    scope.isLoaded=false;
    scope.hasError=false;
    scope.selectedData=null;
		scope.loadData= function(){
      scope.hasError=false;
      dataService.getvzdata(scope.item.widgetSettings.id).then(function(data){
        scope.selectedData=data;
        scope.isLoaded=true;
        scope.hasError=false;

      },function(err){
        scope.hasError=true;
      });
    }	;
    scope.loadData();
	}
};

}]);
