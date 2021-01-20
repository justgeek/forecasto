angular.module('telenorWeather').factory('utilities', ['$state', '$rootScope', function ($state, $rootScope) {



            return {
              

                
                ////////////////////////////////////////////////////////////////////
                //////    Check for duplicates in array by key in object    ////////
                ////////////////////////////////////////////////////////////////////
                //@paramater array - array // array of objects to check for duplciates
                //@paramater key - string //key to look for inside object
                //@paramter value - string //value to match in searched object
                dupesInArray: function (array, key, value) {

                    var length=array.length;
                    for(i=0;i<length;i++)
                    {
                        if (array[i][key]==value)
                            return true;
                    
                            
                    }
                    return false;
                },
         



            };
        }
]);
