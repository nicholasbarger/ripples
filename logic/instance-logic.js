// database
var config = require('../config.js');
console.log('CONFIG', config);
var mongo = require('mongodb');
var monk = require('monk');
var db = monk(config.db);

// models
var Payload = require('../models/payload.js');

module.exports = {
    many: many,
	save: save,
    single: single
}

function many(filter, cb) {
    // todo: enforce the right tenant
    if(!filter) {
        filter = {};
    }
	
    var payload = new Payload();
	var collection = db.get('instances');
    collection.find(filter, function(e, data) {
    	if(e) {
    		// todo: handle error
    	} else {
    		payload.data = data;
    		cb(payload);
    	}
    });
}

function save(id, instance, cb) {
	var payload = new Payload();
    var collection = db.get('instances');
    collection.update(
        { id: id }, { $set: instance }, { upsert: true },
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
    var collection = db.get('instances');
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