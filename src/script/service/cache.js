'use strict';
angular.module('app')
.service('cache',['$cookies',function ($cookies) {
    this.put = function (key, value, options) {
        $cookies.put(key, value, options)        
    };
    this.get = function (key) {
        return $cookies.get(key);
    };
    this.remove = function (key) {
        $cookies.remove(key)
    }

}])