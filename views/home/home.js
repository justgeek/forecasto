angular.module("telenorWeather").controller('homeCtrl', ['$state', '$scope', '$rootScope', 'httpAPI','utilities', '$q', function ($state, $scope, $rootScope, httpAPI,utilities, $q) {


    ////////////////////////////////////////////////////////
    /////         Controller Initialization       //////////
    ////////////////////////////////////////////////////////

   

    
    //Object contains all scope variables
    $scope.variables = {
        //collection of added by user city cards
        cityCards: [],
        //city name to add to collection
        cityName: "",
        //Search permission threshold
        searchThreshold: 5,
        //boolean flag for sort menu
        isSortMenuShown: false,
        //sort value
        sortValue: "name",
        //order value
        orderValue:"ascending",
        //filter string to order and sort city cards
        filterString: "name",
        //nice scroll options
        nsOptions:{
            cursorcolor: "#dfe3db", // change cursor color in hex
        },
    };
   
 
    ////////////////////////////////////////////////////////
    /////            Controller Functions         //////////
    ////////////////////////////////////////////////////////

    

    //add city to collection
    $scope.addCity=function(cityName)
    {
        if (!validateName(cityName))

            return false       
            
        else
        {
            var city = new City(cityName)
            $scope.variables.cityCards.push(city)
            $scope.variables.cityName = "";//reset city name
        }
       console.log($scope.canUpdate)
    }

    //remove city from collection
    $scope.removeCity = function (index) {
        //prompt user to confirm deleting any item
        if (window.confirm("Are you sure you want to remove this item ?")) {
            $scope.variables.cityCards.splice(index, 1);
        }
    };

    //get weather for city
    $scope.getWeatherForCity=function(city)
    {
        httpAPI.getWeatherByCityName({ q: city.name },
            //success
            function (response) {
                city.weatherInfo = response;
                city.weatherInfo.main.temp = parseInt(city.weatherInfo.main.temp)//just for a better look design (ignores float results)
                city.weatherInfo.weather[0].icon = 'icon-tw-' + city.weatherInfo.weather[0].icon;//Map openweathermap icon to design icon.
                console.log(response)
                console.log($scope.variables.cityCards)
            },
            //error
            function (response) {
                console.log(response)
            })
    }

    //update weather for all cities
    $scope.updateWeather=function(citiesArray)
    {
        var length=citiesArray.length;
        for(i=0;i<length;i++)
        {
            $scope.getWeatherForCity(citiesArray[i])
        }
    }

    //validate city name
    function validateName(cityName) {
        //check for null
        if(!cityName)
        {
            alert("Please enter a valid name.")
            return false
        }
        //check for duplicates
        if (utilities.dupesInArray($scope.variables.cityCards, 'name', cityName))//check if city name exists before
        {
            alert("You Can't add city name twice.")
            return false;
        }
        //check for alphabets
        if (/[^a-zA-Z]/.test(cityName)) {
            alert("Only Alphabets are allowed.")
            return false;
        }
        return true;
    }

    //toggle sort Menu on & off
    $scope.toggleSortMenu=function()
    {
        $scope.variables.isSortMenuShown = !$scope.variables.isSortMenuShown;
    }


    //City Constructor
    var City=function(cityName)
    {
        this.name = cityName;
    }

    //update filter value
    $scope.updateFilterValue=function()
    {
        $scope.variables.filterString = ($scope.variables.orderValue == "ascending" ? "" : "-") + $scope.variables.sortValue;
    }

}])