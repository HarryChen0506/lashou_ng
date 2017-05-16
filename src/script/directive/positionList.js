'use strict';

angular.module('app')
.directive('appPositionList',[function () {
    return {
        restrict: 'A',
        templateUrl: 'view/template/positionList.html',
        replace: true,
        scope: {
            data: "=",
            filterObj: "="
        }
    }
}])