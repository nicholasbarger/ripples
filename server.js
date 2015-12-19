var http = require('http');
var port = 8080;

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// middleware
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

// initialize routes for web
var web = require('./routes/web.js')(app);

// initialize routes for api
var api = require('./routes/api.js')(app);

// start web server
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