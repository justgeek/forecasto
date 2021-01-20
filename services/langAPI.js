angular.module('telenorWeather').factory('timeAPI', ['$state', '$rootScope', function ($state, $rootScope) {



            return {
              

                
                /////////////////////////////////////////////////
                //////    Parse Date to simple Object    ////////
                /////////////////////////////////////////////////
                parseDate: function (date) {
                    var simpleDateObject = {
                        "date": date.getDate() + ' ' + date.getMonth() + ' ' + date.getFullYear(),
                        "hours": date.getHours(),
                        "suffix":(this.hours >= 12)? 'pm' : 'am',
                        "minutes": '',
                        "seconds":'',
                    }

                    return isoLangs;
                },
         



            };
        }
]);
