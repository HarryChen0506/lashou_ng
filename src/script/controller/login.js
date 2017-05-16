'use strict';

angular.module('app')
.controller('loginCtrl',['$scope','$rootScope','$http','cache','$state',function ($scope,$rootScope,$http,cache,$state){
    $scope.login = function (){
        $http.post('/data/login.json',$scope.user).then(function (resp){
            console.log(resp);
            cache.put('id',resp.data.id);
            cache.put('name',resp.data.name);
            cache.put('image',resp.data.image);  
            $state.go('me');  
        },function (err){
            alert(err)
        })
    }
    // $scope.demo = function (){
    //     cache.put('id','1111');
    // }
  
}])