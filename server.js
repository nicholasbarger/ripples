var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var Payload = require('./models/payload.js');
var Ripple = require('./models/ripple.js');

var port = 3000;

var app = express();
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

// marketing
app.get('/', function(req, res) {
  res.sendfile('public/index.html');
});

// develop and manage ripples
app.get('/develop', function(req, res) {
  res.sendfile('public/develop.html');
});

// get a list of ripples
app.get('/ripples', function(req, res) {
  var data = [new Ripple('0923js-109283-alsdi-230910', 'validate contact form')];
  console.log(data);
  var dataTimestamp = new Date();
  var payload = new Payload(data, dataTimestamp);
  console.log(payload);
  res.json(payload);
});

// get a specific ripple by _id
app.get('/ripples/:id', function(req, res) {
  var data = new Ripple('0923js-109283-alsdi-230910', 'validate contact form', 'just a simple validation ripple for a basic contact form.');
  var dataTimestamp = new Date();
  var payload = new Payload(data, dataTimestamp);
  res.json(payload);
});

// save changes to a specific ripple by _id
app.post('/ripples/:id', function(req, res) {
  var payload = new Payload(true, new Date());
  res.json(payload);
});

// execute ripple
app.post('/execute/:ripple', function(req, res) {
  // get ripple
  var rippleName = req.params.ripple;
  var ripple = require('./ripples/' + rippleName + '.js');
  // throw 404 error if not found
  if(ripple == null) {
    res.send(404, { error: 'Ripple was not found.' });
  }
  
  // get input
  var input = req.body.input;
  
  // execute ripple
  var output = ripple(input);
  
  // return results
  res.json(output);
});

var server = app.listen(port, function() {
  console.log('Webserver started at http://localhost:%d/', server.address().port);
})

function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.send(500, { error: 'Something blew up!' });
  } else {
    next(err);
  }
}

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}