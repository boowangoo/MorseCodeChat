morseApp.controller('loginCtrl', ['$scope', '$location', '$cookies',
function($scope, $location, $cookies) {
  $scope.tryLogin = function(username, password) {
    console.log('username:', username);
    console.log('password:', password);
    $location.path("/chat");
    // $cookies.put("user", $scope.user_name);
    // $cookies.put("type", data.user_type);
  }
}]);