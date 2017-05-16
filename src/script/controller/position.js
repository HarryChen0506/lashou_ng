'use strict';
angular.module('app')
.controller('positionCtrl',['$scope','$state','$http','$q',function ($scope,$state,$http,$q){
    var positionID = $state.params.id;
    function getPosition () {
        var defered = $q.defer();
        $http.get('data/position.json'+'?id='+positionID).then(function (resp) {       
            $scope.pos = resp.data;
            var companyId = $scope.pos.companyId;
            defered.resolve(companyId);
        },function (error) {
            defered.reject(err);
        })
        return defered.promise;
    }
    function getCompany (companyId) {
        $http.get('data/company.json'+'?id='+companyId).then(function (resp) {       
            $scope.company = resp.data;
        },function (error) {
        })
    }
    getPosition().then(function (companyId){
         getCompany(companyId);
    },function () {

    })
    
}])