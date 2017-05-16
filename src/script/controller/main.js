'use strict';

angular.module('app')
.controller('mainCtrl',['$scope','$rootScope','$http','cache',function ($scope,$rootScope,$http,cache){
    $http.get('data/positionList.json').then(function (resp){       
        $scope.list = resp.data;
        // cache.put('hello',123,{expires: 'Thu Apr 14 2017 23:15:30 GMT+0800 (中国标准时间)'});       
        
    },function (error) {
        console.log(error)
    })
}])
