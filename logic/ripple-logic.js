// database
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/ripples');

// models
var Payload = require('../models/payload.js');

module.exports = {
    clone: clone,
	many: many,
	save: save
}

function clone(id, cb) {
    var rippleSource = rippleLogic.single(id);
    var rippleClone = rippleSource;
    var payload = new Payload();

    rippleLogic.single(id, function(lookupPayload) {
      if(lookupPayload.success) {
        rippleSource = lookupPayload.data;
        rippleClone = rippleSource.clone();
        rippleClone.id = uuid.v4();

        payload.data = rippleClone;
        cb(payload);
      }
    });
}

function many(filter, cb) {
	// todo: handle filter criteria
    var payload = new Payload();
	var collection = db.get('ripples');
    collection.find({}, function(e, data) {
    	if(e) {
    		// handle error
    	} else {
    		payload.data = data;
    		cb(payload);
    	}
    });

    return;
} 

function save(id, ripple, cb) {
    var payload = new Payload();
    var collection = db.get('ripples');
    collection.update(
        { id: id }, { $set: ripple }, { upsert: true },
        function(err, data) {
            if(err) {
              // todo: handle error
              console.log(err);
            }
            else {
              // todo: check to ensure data is the full returned record
              payload.data = data;
            }
              
            cb(payload);
        });
}

function single(id, cb) {
    var payload = new Payload();
    var collection = db.get('ripples');
    collection.findOne({ id: id }, function(e, data) {
    	if(e) {
    		// handle error
    		console.log(e);
    	} else {
			payload.data = data;
    		cb(payload);
    	}
    });

    return;
}