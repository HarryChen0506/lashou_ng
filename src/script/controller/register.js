'use strict';

angular.module('app')
.controller('registerCtrl',['$scope','$rootScope','$http','cache','$interval','$state',function ($scope,$rootScope,$http,cache,$interval,$state){
    $scope.user = {};
    $scope.time = '';
    var count = 60;
    $scope.send = function (){
        $http.get('/data/code.json').then(function(resp){            
            if(resp.data.state==1){
                var interval = $interval(function (){
                    count--;
                    if(count<0){
                        $scope.time="";
                        $interval.cancel(interval);
                    }else{
                        $scope.time = count + '秒';
                    }
                },1000)}
        },function (err){
            console.log(err)
        }) 
    }
    $scope.register = function () {
        $http.post('/data/login.json',$scope.user).then(function (resp){
            alert('注册成功');
            $state.go('login')
        },function (err){
            console.log(err)
        })
    }

}])