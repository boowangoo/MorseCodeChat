# MorseCodeChat
**This service is still under development**
A novel messaging service, where users may only use morse code to send out messages. *MorseCodeChat* follows [International Morse Code ](https://morsecode.scphillips.com/morse.html) conventions, but allows for  adjustable levels of leniency so that novices of morse code are able to comfortably use the service. *MorseCodeChat* is suitable for hobbyists and learners of morse code alike.

----------

# Setup

The plan is to have a timer and a key-event-listener in the context of $window. There is also a chatCtrl with a morseQueue in its $scope. The timer and key-event-listener work in tandem to produce morse code components ("dits", "dahs", and various spaces), which are enqueued to the morseQueue and triggers a $digest cycle.
    
# Execution
0. a) Initially, no timer, key-event-listener is checking for "key-down". morseQueue should be empty.
 b) It is also possible that key-event-listener is checking for "key-up", but 0a) should be the default upon loading.
  
1. If key-down, timer starts. key-event-listener is now checking for "key-up".

2. a) If key-up occurs after 0-1.5 t.u. (time units), then enqueue "dit".
 b) If key-up occurs after 1.5-5 t.u., then enqueue "dah".
  
3. a) Restart timer, key-event-listener is now checking for "key-down".
 b) If there's still no key-up after 5 t.u., then kill the timer and go to step 0)B).
  
4. a) If key-down occurs after 0-1.5 t.u., then enqueue a "component space".
 b) If key-down occurs after 1.5-5 t.u., then enqueue a "letter space".
 c)If key-down occurs after 5 t.u. then enqueue a "word space".
  
5. a) Restart timer, key-event-listener is now checking for "key-up"
 b) If there's still no key-down after 10 t.u., then kill the timer and go to step 0)A).
