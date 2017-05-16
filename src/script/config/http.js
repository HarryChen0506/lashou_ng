'use strict';
//装饰器
angular.module('app')
.config(['$provide',function ($provide){
    $provide.decorator('$http',['$delegate','$q',function ($delegate,$q){
        var get = $delegate.get;
        $delegate.post = function (url,data,config){
            var def = $q.defer();
            get(url).then(function(resp){
                def.resolve(resp);
            },function(err){
                def.reject(err);
            });
            return def.promise;
        }
        return $delegate;
    }])
}])