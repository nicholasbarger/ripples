// database
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/ripples');

// models
var Payload = require('../models/payload.js');

module.exports = {
    clone: clone,
    execute: execute,
	many: many,
	save: save,
    single: single
}

function clone(id, cb) {
    var rippleSource = rippleLogic.single(id);
    var rippleClone = rippleSource;
    var payload = new Payload();

    single(id, function(lookupPayload) {
      if(lookupPayload.success) {
        rippleSource = lookupPayload.data;
        rippleClone = rippleSource.clone();
        rippleClone.id = uuid.v4();

        payload.data = rippleClone;
        cb(payload);
      }
    });
}

function execute(id, input) {
    var payload = new Payload();
    var ripple;
    var run;
    var i = 0;

    // get ripple
    single(id, function(payload) {
        ripple = payload.data;

        if(payload.success) {

            // the infamous, dangerous, and misunderstood eval()
            run = new Function('input', 'cb', payload.data.code);

            // execute ripple
            run(input, function(output) {

                // look for next ripples to execute
                if(ripple.ripples && ripple.ripples.length > 0) {
                    for(i = 0; i < ripple.ripples.length; i++) {

                        // pass the output from the parent ripple as input
                        // to the next wave of ripples
                        execute(ripple.ripples[i].id, output);
                    }
                }
            });

            payload.data = new Date();
            return payload;

        } else {
            // handle error/notfound
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
}