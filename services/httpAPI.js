angular.module('telenorWeather').factory('httpAPI', [
        '$http', '$state', '$rootScope', function ($http, $httpParamSerializerJQLike, $state, $rootScope) {


            //create an http request
            var createHttpRequest = function (httpProvider, method, data, successCallbackFunction, errorCallbackFunction) {



                var request = {
                    method: method,
                    url: data.Url,
                    timeout: 10000,
                    headers: data.Headers,
                    params: data.body,
                    paramSerializer: '$httpParamSerializerJQLike'
              
                };

                //show loading before submittin any request.
                // if (!$rootScope.isLoadingShown)
                //  $rootScope.showLoading();

                httpProvider(request).then(function (response) {
                    //for testing purposes log all backend calls


                    successCallbackFunction(response.data);
                }, function (response) {

                    switch (response.status) {
                        case 401:
                            //  $rootScope.notify("error", "Unauthorized Request");
                            alert("Unauthorized Request")
                            break;
                        case 404:
                            //   $rootScope.notify("error", "Not Found!");
                            alert("Not Found!")
                            break;
                        case 500:
                            alert("Server Error!")
                            //goToErrorPage();
                            break;
                        case 0:
                            alert("Connection Error!")
                          //  $rootScope.notify("error", "Connection Error!");
                            break;
                        case -1:
                            alert("Connection Timeout, Please try again")
                         //   $rootScope.notify("error", "Connection Timeout");
                            break;
                        default:


                            break;
                    }
                    console.log(response)


                    // call error passed from call back function
                    errorCallbackFunction(response);
                }).then(
                //success
                function () {

                    //  $rootScope.hideLoading();
                },
                //error
                function () {

                    //   $rootScope.hideLoading();

                });


            }

            return {

                ////////////////////////////////////////////////////
                //////    Get weather for a specific city   ////////
                ////////////////////////////////////////////////////
                getWeatherByCityName: function (params, successCallback, errorCallback) {
                    var data = {};
                    data.Url = 'http://api.openweathermap.org/data/2.5/weather';
                    data.Headers = {};
                    params.APPID = 'ba0f238a9777a790cfb3293688bcad3b';
                    params.units = 'metric';
                    data.body=params

                    return createHttpRequest($http, 'GET',
                        data,
                        successCallback,
                        errorCallback);
                },




            };
        }
]);
