'use strict';

angular.module('psDashboard').directive('psWidgetBody', ['$compile', '$uibModal', function ($compile, $uibModal) {
  return {
    templateUrl: 'ext-modules/psDashboard/psWidgetBodyTemplate.html',
    link: function (scope, el, attrs) {
      var newElement = angular.element(scope.item.template);
      el.append(newElement);
      $compile(newElement)(scope);
      scope.close = function () {
        scope.widgets.splice(scope.widgets.indexOf(scope.item), 1);
      };
      scope.settings = function () {
        var options = {
          templateUrl: scope.item.widgetSettings.templateUrl,
          controller: scope.item.widgetSettings.controller,
          scope: scope
        };
        $uibModal.open(options);
      };
    }
  };
}]);
