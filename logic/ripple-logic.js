// database
var config = require('../config.js');
console.log('CONFIG', config);
var mongo = require('mongodb');
var monk = require('monk');
var db = monk(config.db);

// models
var Instance = require('../models/instance.js');
var Payload = require('../models/payload.js');

// references
var instanceLogic = require('./instance-logic.js');

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

function execute(id, input, originalInstanceId) {
    var i = 0,
        instance,
        payload = new Payload(),
        ripple,
        run;

    // get ripple
    single(id, function(payload) {
        ripple = payload.data;

        if(payload.success) {

            // create function from code
            run = new Function('input', 'cb', payload.data.code);

            // create instance (undefined to get new id through constructor)
            instance = new Instance(undefined, ripple);
            instance.input = input;
            instance.originalInstanceId = originalInstanceId || null;

            // save instance
            instanceLogic.save(instance.id, instance, function(payload) {
                // todo: should we do something here?
            });

            // execute ripple
            run(input, function(output) {

                // update instance
                instance.output = output;
                instance.end = new Date();

                // save instance
                instanceLogic.save(instance.id, instance, function(payload) {
                    // todo: should we do something here?
                });

                // look for next ripples to execute
                if(ripple.ripples && ripple.ripples.length > 0) {
                    for(i = 0; i < ripple.ripples.length; i++) {

                        // pass the output from the parent ripple as input
                        // to the next wave of ripples
                        execute(ripple.ripples[i].id, output, ripple.id);
                    }
                }
            });

            payload.data = new Date();
            return payload;

        } else {
            // todo: handle error/notfound
        }
    });
}

function many(filter, cb) {
	if(!filter) {
        filter = {};
    }

    var payload = new Payload();
	var collection = db.get('ripples');
    collection.find(filter, function(e, data) {
    	if(e) {
    		// todo: handle error
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
    		// todo: handle error
    		console.log(e);
    	} else {
			payload.data = data;
    		cb(payload);
    	}
    });
}