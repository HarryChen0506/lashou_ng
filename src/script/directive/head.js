'use strict';
angular.module('app')
.directive('appHead',[function () {
    return {
        restrict: 'A',
        templateUrl: 'view/template/head.html',
        replace: true
    }
}])