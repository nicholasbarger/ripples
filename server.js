var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var port = 8080;

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
  var payload = {
    data: [{_id: '0923js-109283-alsdi-230910', name: 'validate contact form'}],  
    dataTimestamp: new Date(),
    availableCount: 0
  };
  res.json(payload);
});

// get a specific ripple by _id
app.get('/ripples/:id', function(req, res) {
  var payload = {
    data: { _id: '0923js-109283-alsdi-230910', name: 'validate contact form', description: 'just a simple validation ripple for a basic contact form.'}
  };
  res.json(payload);
});

// save changes to a specific ripple by _id
app.post('/ripples/:id', function(req, res) {
  var payload = {
    data: true  
  };
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
  console.log('Listening on port %d', server.address().port);
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