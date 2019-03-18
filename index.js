// server
var express = require('express');
var app = express();
app.set('port', process.env.PORT || 5000);

// Our first route
app.get('/', function (req, res) {
  res.send('Hello Node + GitHub!');
});

// Listen to port
app.listen(app.get('port'), function () {
  console.log('new App is listening on port ' + app.get('port'));
});


var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://broker.hivemq.com')
 
client.on('connect', function () {
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    }
  })
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})
