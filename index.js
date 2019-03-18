// server
var express = require('express');
var app = express();
app.set('port', process.env.PORT || 5000);

// Our first route
app.get('/', function (req, res) {
  console.log("new get request received");
  res.send('Hello Node + GitHub!');
});

// Listen to port
app.listen(app.get('port'), function () {
  console.log('new App is listening on port ' + app.get('port'));
});


