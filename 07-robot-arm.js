var five  = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var servo = new five.Servo({
    pin   : 9,
    center: true,
    range : [ 0, 179 ]
  });
  var potentiometer = new five.Sensor('A2');

  potentiometer.on('change', function(value) {
    var angle = five.Fn.map(value, 0, 1023, 0, 179);
    servo.to(angle);
  })

});