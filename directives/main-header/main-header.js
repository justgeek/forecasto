angular.module("telenorWeather").directive('mainHeader', function ($state) {
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        link:function($scope,$state,$rootScope)
        {
           
        },
        templateUrl: "directives/main-header/main-header.html",
        
    };
});

