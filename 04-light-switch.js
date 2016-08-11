var five  = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var led    = new five.Led(9);
  var button = new five.Button(5);

  button.on('press', function() {
    led.toggle();
  });
});
