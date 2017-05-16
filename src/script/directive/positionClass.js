'use strict';
angular.module('app')
.directive('appPositionClass',[function () {
    return {
        restrict: 'A',
        repalce: true,
        templateUrl: 'view/template/positionClass.html',
        controller: 'positionClassCtrl',
        scope: {
            com: '='
        },
        link: function ($scope,element,attr) {
            // $scope.com = {};
            // $scope.com.positionClass = [];
            // $scope.com.positionClass[0] = {};
            $scope.positionItem = {};
           $scope.showPosition = function (index) {                             
                $scope.positionItem = $scope.com.positionClass[index].positionList;
                $scope.isActiveNum = index;                
            }
            // $scope.$watch('com',function(newValue,oldValue){
            //     // try {
            //     //     $scope.showPosition(0);
            //     // }catch(err){
            //     //     console.log(err)
            //     // }
            //     if(newValue){
            //         $scope.showPosition(0);
            //     }           
            // });
            
            $scope.$on('abc',function (event, data) {
                $scope.positionItem = data.positionClass[0].positionList;
                $scope.isActiveNum = 0;               
            })
              
        }
     }
}])
.controller('positionClassCtrl', ['$scope',function ($scope) {  
    
    
}])