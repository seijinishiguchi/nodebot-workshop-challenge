var five  = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var led    = new five.Led(9);
  var sensor = new five.Sensor('A0');

  sensor.on('data', function() {
    var ledControl = (this.value >= 600)
      ? function() { led.on(); }
      : function() { led.off(); }
    ;
    ledControl();
  });
});
