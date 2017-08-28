let morseApp = angular.module('morseApp', [
              'ui.bootstrap',
              'ngRoute',
              'ngCookies',
              'ngAnimate'
]);

// routes
morseApp.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/partials/login.html',
        controller: 'loginCtrl'
      }).
      when('/chat', {
        templateUrl: '/partials/chat.html',
        controller: 'chatCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);