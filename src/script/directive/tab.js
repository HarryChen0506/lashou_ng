'use strict';
angular.module('app')
.directive('appTab',[function () {
    return {
        restrict: 'A',
        templateUrl: 'view/template/tab.html',
        replace: true,
        scope: {
            tabList: '=',
            actionFunc: '&'
        },
        link: function ($scope){
            $scope.activeId = '';
            $scope.click = function (item){
                $scope.activeId = item.id;                
                $scope.actionFunc({obj:item});
            }
            
        }

    }
}])