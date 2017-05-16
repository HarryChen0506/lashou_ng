'use strict';

angular.module('app')
.controller('meCtrl',['$scope','$rootScope','$http','cache','$state',function ($scope,$rootScope,$http,cache,$state){
    function checkIsLogin(){
        var id = cache.get('id');
        if(!id){
            alert('未登录'); 
            $state.go('login');
        }
    }
    checkIsLogin();

    $scope.loginout = function (){
        console.log('loginout');
        cache.remove('id');
        cache.remove('name');
        cache.remove('image');
        $state.go('main');
    }
}])
