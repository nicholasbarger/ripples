// libraries
var uuid = require('node-uuid');

// models
var Payload = require('../models/payload.js');
var Ripple = require('../models/ripple.js');

// logic
var rippleLogic = require('../logic/ripple-logic.js');

module.exports = function(app) {
  // get a list of ripples
  app.get('/api/v1/ripples', function (req, res) {
    
    rippleLogic.many(req.params.filter, function(payload) {
      respond(payload, req.query.envelope, res);
    });  
    
  });

  // get a new ripple model
  app.get('/api/v1/ripples/new', function (req, res) {

    var payload = new Payload(new Ripple());
    respond(payload, req.query.envelope, res);

  });

  // get a specific ripple by id
  app.get('/api/v1/ripples/:id', function (req, res) {
    
    console.log(req.params.id);
    rippleLogic.single(req.params.id, function(payload) {
        respond(payload, req.query.envelope, res);
    }); 
    
  });

  // save changes to a specific ripple by id
  app.post('/api/v1/ripples/:id', function (req, res) {
    
    console.log(req.body);
    rippleLogic.save(req.params.id, req.body, function(payload) {
      respond(payload, req.query.envelope, res);
    }); 
    
  });

  // clone an existing ripple (must be public or owned by requesting user)
  app.post('/api/v1/ripples/:id/clone', function(req, res) {
    
    rippleLogic.clone(req.params.id, function(payload) {
      respond(payload, req.query.envelope, res);
    });

  });

  // execute ripple
  app.post('/api/v1/execute/:ripple', function (req, res) {
    // get ripple
    var rippleName = req.params.ripple;
    var ripple = require('./ripples/' + rippleName + '.js');
    // throw 404 error if not found
    if (ripple == null) {
        res.send(404, { error: 'Ripple was not found.' });
    }

    // get input
    var input = req.body.input;

    // execute ripple
    var output = ripple(input);

    // return results
    res.json(output);
  });
};

function respond(payload, envelope, res) {
  if(payload.success) {
    if(envelope) {
      res.json(payload);
    } else {
      res.json(payload.data);
    }
    
  } else {
    // todo: throw error
    res.json('error');
  }
}