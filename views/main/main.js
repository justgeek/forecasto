angular.module("telenorWeather").controller('mainCtrl', ['$state', '$scope', '$rootScope', function ($state, $scope, $rootScope) {
    /*This is an abstract controller, and logic here will run disregarding current active state*/

    ////////////////////////////////////////////////////////
    /////         Controller Initialization       //////////
    ////////////////////////////////////////////////////////
    
    
    ////////////////////////////////////////////////////////
    /////            Controller Functions         //////////
    ////////////////////////////////////////////////////////

    //go to a specific state
    $rootScope.gotoState = function (stateName) {
        $state.go(stateName);
    }

    


}]);

