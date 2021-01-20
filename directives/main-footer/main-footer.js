angular.module("telenorWeather").directive('mainFooter', function ($state) {
    return {
        restrict: 'E',
        replace: true,
      
        link:function($scope,$stateParams,$rootScope)
        {    
           
            
        },
        templateUrl: "directives/main-footer/main-footer.html",
        
    };
});

