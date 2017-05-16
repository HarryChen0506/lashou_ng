'use strict';
angular.module('app')
.controller('searchCtrl',['$scope','$state','$http','$q','dict',function ($scope,$state,$http,$q,dict){
    $http.get('/data/positionList.json').then(function (resp){
        $scope.positionList = resp.data;
    },function (err){
        console.log(err)
    })

    //绑定tab数据
    $scope.tabList = [{
            id:'city',
            name:'城市'
        },{
            id:'salary',
            name:'薪水'
        },{
            id:'scale',
            name:'公司规模'
    }];

    $scope.tabList_backup = angular.copy($scope.tabList);
    //过滤参数
    $scope.filterObj = {};
    //tab选择的结果
    $scope.tabSelectItem = {};
    //sheet选中的标记
    $scope.sheetSelectItem = {};

    $scope.tclick = function (item){        
        //$scope.tabSelectItem tab选中的标记
        $scope.tabSelectItem = item;
        $scope.sheetList = dict[$scope.tabSelectItem.id];
        $scope.sheetVisible = true;      
       
    }
    $scope.sclick = function (item){
         //$scope.sheetSelectItem sheet选中的标记
        $scope.sheetSelectItem = item;      
       
        //改变tab的显示
        changeTabUi($scope.tabSelectItem,$scope.sheetSelectItem,$scope.tabList);
        //设置过滤条件
        setFilterOption($scope.filterObj,$scope.tabSelectItem,$scope.sheetSelectItem)
    }

    function changeTabUi(tabItem,sheetItem,tabList){
        // console.log('hahh')
        // console.log(tabItem);
        // console.log(sheetItem);
        // console.log(tabList);
        for(var i=0; i<tabList.length; i++){
            if(tabItem.id == tabList[i].id){               
                if(sheetItem.id !== ''){
                    tabList[i].name = sheetItem.name;
                }else{
                   tabList[i].name = $scope.tabList_backup[i].name;  
                }                
            }
        }
    }
    //设置过滤条件
    function setFilterOption(filterObj,tabSelectItem,sheetSelectItem){
         if(sheetSelectItem.id !== ''){
            filterObj[tabSelectItem.id+'Id'] = sheetSelectItem.id;
        }else{
            delete filterObj[tabSelectItem.id+'Id'];
        }     
    }
    
   

    
}])