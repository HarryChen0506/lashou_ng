'use strict';
angular.module('app')
.config(['$validationProvider',function ($validationProvider){
    var expression = {
        phone: /^1[\d]{10}$/,
        password: function (value){
            return value.length > 5;
        },
        code: function (value){
            return !!value;
        }
    };
    var defaultMsg = {
        phone: {
            success: '',
            error: '必须是11位手机号码'
        },
        password: {
            success: '',
            error: '长度必须6位以上'
        },
        code: {
            success: '',
            error: '验证码不能为空'
        }
    };
    $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);

}])