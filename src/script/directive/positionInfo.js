'use strict';

angular.module('app')
.directive('appPositionInfo',[function () {
    return {
        restict: 'A',
        templateUrl: 'view/template/positionInfo.html',
        replace: true,
        controller: 'positionInfoCtrl',
        scope:{ 
            isActive: "=",
            isLogin: "=",
            pos: "="
        },
        link: function (scope, element, attr) {            
            scope.imgPathUrl = scope.isActive?'image/star-active.png':'image/star.png';
            scope.toggleActive = function () {
                scope.isActive = !scope.isActive;
                scope.imgPathUrl = scope.isActive?'image/star-active.png':'image/star.png';
            }
        }
    }
}])
.controller('positionInfoCtrl',['$scope','$state','$http',function ($scope,$state,$http) {
    

}])