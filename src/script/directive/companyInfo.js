'use strict'

angular.module('app')
.directive('appCompany',[function () {
    return {
        restrict: 'A',
        templateUrl: 'view/template/companyInfo.html',
        controller: 'companyInfoCtrl',
        scope: {
            com: '='
        },
        link: function (scope, element, attr) {

        }
    }
}])
.controller('companyInfoCtrl',[function () {
  
}])