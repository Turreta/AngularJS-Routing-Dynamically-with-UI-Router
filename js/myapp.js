(function() {
    
    // Instantiate our main module and pass ngRoute
    var myapp = angular.module('myapp', ['ui.router']);
    
    
    // Define the routes here
    myapp.config(function ($stateProvider, $urlRouterProvider) {
        
        // The "root" or default route uses the content of main.html for display
        var main = {
            name: 'main',
            url: '/',
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        };
        
         // The "second" route uses the content of second.html for display
        var second = {
            name: 'second',
            url: '/second',
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        };
        
         $stateProvider.state(main);
         $stateProvider.state(second);
        
         // Set the default or initial URL
         $urlRouterProvider.otherwise("/");
    });
    
    // This ties up to "/" route
    myapp.controller('mainController', ['$scope', '$log', function($scope, $log) {
        $scope.name = 'Main';
    }]);

    // This ties up to "/second" route
    myapp.controller('secondController', ['$scope', '$log', function($scope, $log) {
        $scope.name = 'Second';    
    }]);
    
    // Navigation-by-button controller
    myapp.controller('navByButtonController', ['$scope', '$log', '$state', function($scope, $log, $state) {
        $scope.goHome = function() {
            $state.go('main');
        };
        
        $scope.goSecond = function() {
            $state.go('second');
        }; 
    }]);
})();
