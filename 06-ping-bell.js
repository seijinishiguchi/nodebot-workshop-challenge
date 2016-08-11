var five   = require('johnny-five');
var dgram  = require('dgram');
var client = dgram.createSocket('udp4');
var board  = new five.Board();

client.bind({
  address: 'localhost',
  port   : 1337
});

board.on('ready', function() {
  var piezo = new five.Piezo(8);

  client.on('message', function() {
    piezo.play({
      song: "C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -",
      beats: 1 / 4,
      tempo: 120
    });
  });
});
