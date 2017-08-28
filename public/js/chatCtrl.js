morseApp.controller('chatCtrl', ['$scope', '$interval', 
function($scope, $interval) {
  $scope.test = 'hello';
  $scope.chatMessages = [
    {
      'msgID': 0, // this is the message object of the user
      'name': $scope.user_name,
      'message': []
    }
    // other users' message objects are given non-zero msgID
  ];

  
  let socket = io();
  $scope.sendMessage = function(msg) {
    console.log(msg);
    socket.emit('chat message', msg);
    socket.on('chat message', function(msg) {
      $('#messages').append($('<li>').text('nig'));
    });
  }

  let listenPress = new $window.keypress.Listener();
  // console.log(listenPress);
  listenPress.simple_combo("space", function() {
    let i = 0;
    $interval(function() {
      console.log("seconds passed:", i);
      i++;
    }, 1000);
  });

  let currTime = 0;
  let currKeyEvent = listenDown;
  let keyState = 0;
  let ks = {
    INIT: 0,
    // L: Current key event Listener
    CL_UP: 1, CL_DOWN: 2,
    // O: Output to enqueue
    O_DIT: 3, O_DAH: 4,
    // (C|L|W)SPACE: (Component|Letter|Word) space
    O_CSPACE: 5, O_LSPACE: 6, O_WSPACE: 7
  }

  let keyStateSM = function() {
    let tu = $scope.timeUnit;
    switch (keyState) {
      case ks.INIT:
        // (re)start timer
        currKeyEvent = listenUp;
        keyState = ks.CL_UP;
        break;
      case ks.CL_UP:
        if (currTime < 1.5*tu) {
          // enqueue dit
          keyState = ks.O_DIT;
        }
        else if (currTime < 5*tu) {
          // enqueue dah
          keyState = ks.O_DAH;
        }
        else if (currTime > 4.5*tu) {
          // kill timer
          keyState = ks.INIT;
        }
        break;
      case ks.CL_DOWN:
        if (currTime < 1.5*tu) {
          // enqueue cspace
          keyState = ks.O_CSPACE;
        }
        else if (currTime < 5*tu) {
          // enqueue lspace
          keyState = ks.O_LSPACE;
        }
        else if (currTime < 10*tu) {
          // enqueue wspace
          keyState = ks.W_LSPACE;
        }
        else if (currTime > 9.5*tu) {
          // kill timer
          keyState = ks.INIT;
        }
        break;
      case ks.O_DIT:
      case ks.O_DAH:
        // restart timer
        currKeyEvent = listenDown;
        keyState = ks.CL_DOWN;
        break;
      case ks.O_CSPACE:
      case ks.O_LSPACE:
      case ks.O_WSPACE:
        // restart timer
        currKeyEvent = listenUp;
        keyState = ks.CL_UP;
        break;
      default:
        break;
    }
  }

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
