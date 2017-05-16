'use strict';

angular.module('app')
.controller('postCtrl',['$scope','$rootScope','$http','cache',function ($scope,$rootScope,$http,cache){
    $scope.tabList = [{
        id:'all',
        name:'全部'
    },{
        id:'pass',
        name:'面试邀请'
    },{
        id:'fail',
        name:'不合适'
    }]

    console.log('123')
  
}])