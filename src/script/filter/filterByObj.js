'use strict';
angular.module('app')
.filter('filterByObj',[function (){
    return function (list, obj){
        var arr =[];
        angular.forEach(list, function(item){ 
            var isEqual = true;
            for(var key in obj){
                if(item[key]!==obj[key]){
                    isEqual = false
                }
            }
            if(isEqual){
                arr.push(item)
            }
        })
        return arr;
    }   
}])