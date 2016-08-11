var five  = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var temperature = new five.Thermometer({
    controller: 'TMP36',
    pin       : 'A0'
  });
  var piezo       = new five.Piezo(9);
  var led         = new five.Led(13);
  var button      = new five.Button(5);

  var canRingAlarm = true;

  var buttonListener = function() {
    console.log('buttonListener');
    button.on('press', function() {
      if (canRingAlarm) {
        canRingAlarm = false;

        piezo.stop();
        led.off();
      }
    });
  };

  var alarmControll = function(celsiusValue) {
    console.log(celsiusValue);
    if (!canRingAlarm) {
      if (celsiusValue <= 50) {
        canRingAlarm = true;
      }
      return;
    }

    if (celsiusValue > 50) {
      piezo.frequency(440, 3000);
      led.blink(500);

      buttonListener();

    } else if (celsiusValue <= 50) {
      console.log('drop under 50');
      piezo.stop();
      led.off();
    }
  };

  temperature.on("change", function() {
    console.log(this.celsius);
    alarmControll(this.celsius);
  });
});
