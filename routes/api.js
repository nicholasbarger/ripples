var uuid = require('node-uuid');

var Payload = require('../models/payload.js');
var Ripple = require('../models/ripple.js');

module.exports = function(app) {
  // get a list of ripples
  app.get('/ripples', function (req, res) {
    
    var db = req.db;
    var collection = db.get('ripples');
    collection.find({}, function(e, data) {
      var payload = new Payload(data);
      console.log(payload);
      res.json(payload);
    });
    
  });

  // get a specific ripple by _id
  app.get('/ripples/:id', function (req, res) {
    
    var db = req.db;
    var collection = db.get('ripples');
    collection.findOne(req.params.id, function(e, data) {
      var payload = new Payload(data);
      res.json(payload);
    });
    
  });

  // save changes to a specific ripple by _id
  app.post('/ripples/:id', function (req, res) {
    
    var payload = new Payload();
    var db = req.db;
    var collection = db.get('ripples');
    collection.update(
        { _id: req.params.id }, { $set: {
          'name': req.body.name,
          'description': req.body.description,
          'code': req.body.code,
          'sampleInput': req.body.sampleInput,
          'sampleOutput': req.body.sampleOutput
        }},
        function(err, data) {
        if(err) {
          payload.data = null;
          payload.errors.push(new Error('Update failed', 'Problem updating record in database.'));
          payload.message = 'Problem updating record in database.';
        }
        else {
          // todo: check to ensure data is the full returned record
          payload.data = data;
        }
          
        res.send(payload);
    });
    
  });

  // clone an existing ripple (must be public or owned by requesting user)
  app.post('/ripples/:id/clone', function(req, res) {
    var rippleSource = getRipple(req.params.id);
    var rippleClone = rippleSource;
    rippleClone._id = uuid.v4();
    var payload = new Payload(rippleClone, new Date());
    return payload;
  });

  // execute ripple
  app.post('/execute/:ripple', function (req, res) {
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