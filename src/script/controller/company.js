'use strict';
angular.module('app')
.controller('companyCtrl',['$scope','$stateParams','$http',function ($scope,$stateParams,$http){    
    var companyId = $stateParams.id;
     $http.get('data/company.json'+'?id='+companyId).then(function (resp) {       
        $scope.company = resp.data;
        $scope.$broadcast('abc',$scope.company);

    },function (error) {
        
    })

}])