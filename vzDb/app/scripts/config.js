'use strict';
angular.module('vzDb').config(function($provide){
	$provide.decorator('$exceptionHandler',['$delegate',function($delegate){
return function(exception,cause){
$delegate(exception,cause);
//alert(exception.message);
};
	}]);

});