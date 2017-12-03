const request = require('request');
const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
const server = require('http').createServer(app);

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

var port = process.env.PORT || 3000;

//Sets the default path the be the public_dir folder.
app.use(express.static(path.join(__dirname, '/public_dir')));

app.get('/', function(req, res) {
  request('http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/1_7040.json?key=TEST&minutesAfter=20', function (error, response, body) {
    var json = JSON.parse(body);
    return res.json(json);
  });
});

server.listen(port, function(){
  console.log('Server on port:' + port);
});
