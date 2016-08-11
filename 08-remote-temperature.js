var five  = require('johnny-five');
var dnode = require('dnode');
var board = new five.Board();

board.on('ready', function() {
  var temperature = new five.Thermometer({
    controller: 'TMP36',
    pin       : 'A0'
  });

  // server API
  var server = dnode({
    getTemperature: function(cb) {
      cb(temperature.celsius);
    }
  });

  server.listen(1337);
});
