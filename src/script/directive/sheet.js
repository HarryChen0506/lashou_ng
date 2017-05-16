'use strict';
angular.module('app')
.directive('appSheet',[function () {
    return {
        restrict: 'A',
        templateUrl: 'view/template/sheet.html',
        replace: true,
        scope: {
            sheetList: '=',
            sheetVisible: '=',
            actionFunc: '&'
        },
        link: function ($scope){
            $scope.cancel = function (){
                $scope.sheetVisible = false;
            };
            $scope.selectItem = function (item){
                $scope.actionFunc({obj:item});
                $scope.cancel();
            }
        }
    }
}])