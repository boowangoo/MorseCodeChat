// $(() => {
//   let socket = io();
//   $('form').submit(() => {
//     socket.emit('chat message', $('#m').val());
//     $('#m').val('');
//     return false;
//   });
//   socket.on('chat message', (msg) => {
//     $('#messages').append($('<li>').text(msg));
//   });
// });

let morseApp = angular.module('morseApp', [
              'ngRoute',
              'controllers'
]);

morseApp.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/public/partials/login.html',
        controller: 'loginCtrl'
      }).
      when('/chat', {
        templateUrl: '/public/partials/login.html',
        controller: 'chatCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);

morseApp.controller('chatCtrl', ['$scope', function($scope) {
}]);
