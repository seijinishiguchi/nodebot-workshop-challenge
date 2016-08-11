var five  = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var servo = new five.Servo({
    pin   : 9,
    center: true
  });
  servo.sweep([0, 180]);

  this.wait(3000, function() {
    servo.stop();
    servo.center();
  });
});
