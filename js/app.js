////////////////////////////////////////////
///////    Initilization    ////////////////
////////////////////////////////////////////

//Depency Injection
; (function () {


    /**
     * Definition of the main app module and its dependencies
     */
    angular
      .module('telenorWeather', [
        'ui.router',
        'oc.lazyLoad',
        
      ])
      .config(config)
      

    function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

        //by default route to dashboard state
        $urlRouterProvider.otherwise("/home");

        //Application Views
        //State Params: object
        //@title: string - to be displayed in current state header title
        //@backflag: boolean - whether to show back button or not.
        $stateProvider
        //index
             .state('index', {
                 abstract: true,
                 data: { stateTitle: "index"},
                 url: "/",
                 templateUrl:"views/main/main.html",
                 controller: "mainCtrl",
                 resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                     loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                         // you can lazy load files for an existing module
                         return $ocLazyLoad.load({
                             name: 'telenorWeather',
                             files: ['views/main/main.js', 'views/main/main.css']
                            
                         });
                     }]
                 },
             })

        //Home State where city cards are shown
            .state('index.home', {
                data: { stateTitle: "Home"},
                url: "home",               
                templateUrl: "views/home/home.html",
                controller:"homeCtrl",
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            name: 'telenorWeather',
                            files: ['views/home/home.js', 'views/home/home.css']
                        });
                    }]
                },

            })

    }


})();