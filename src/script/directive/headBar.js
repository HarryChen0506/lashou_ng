'use strict';

angular.module('app')
.directive('appHeadBar',[function () {
    return {
        restrict: 'A',
        templateUrl: 'view/template/headBar.html',
        replace: true,
        scope: {
            text: '@'
        },
        controller:function () {
            
        },
        link: function (scope,element,attr){
            scope.back = function () {
                window.history.back();
            }
        }
    }
}])