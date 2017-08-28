morseApp.controller('chatCtrl', ['$scope', '$interval', 
function($scope, $interval) {
  $scope.test = 'hello';
  $scope.chatMessage = '';
  
  let socket = io();
  $scope.sendMessage = function(msg) {
    console.log(msg);
    socket.emit('chat message', msg);
    socket.on('chat message', function(msg) {
      $('#messages').append($('<li>').text('nig'));
    });
  }

  // let listener = new window.keypress.Listener();
  // // console.log(listener);
  // listener.simple_combo("space", function() {
  //   let i = 0;
  //   $interval(function() {
  //     console.log("seconds passed:", i);
  //     i++;
  //   }, 1000);
  // });

  $scope.keyPressCall = function(event) {
    let i = 0;
    $interval(function() {
      console.log("seconds passed:", i);
      i++;
    }, 1000);
  }

// $scope.$watch('chatMessage', function() {
//   console.log($scope.chatMessage);
// });
  
  // let socket = io();
  // $(() => {
  //   $('form').submit(() => {
  //     socket.emit('chat message', $('#m').val());
  //     $('#m').val('');
  //     return false;
  //   });
    // socket.on('chat message', (msg) => {
    //   $('#messages').append($('<li>').text(msg));
    // });
  // });
  // var handler = function(e){
  //   if(e.keyCode === 39) {
  //     console.log('right arrow');
  //     // $scope.doSomething();
  //   }      
  // };
  
  // var $doc = angular.element(document);
  
  // $doc.on('keydown', handler);
  // $scope.$on('$destroy',function(){
  // $doc.off('keydown', handler);
  // })
  
}]);
