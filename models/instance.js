var moment = require('moment');
var uuid = require('node-uuid');

module.exports = function(obj) {
	return {

		// the unique id of this ripple instance
		id: obj.id || uuid.v4(),

		// when the instance finished running
		end: obj.end || null,

	    // the input received to execute this ripple instance
	    input: obj.input || null,

	    // the original instance that started the entire chain
	    originalInstanceId: obj.originalInstanceId || null,

	    // the generated output for this ripple instance
	    output: obj.output || null,

	    // the parent ripple defining this code execution
	    ripple: obj.ripple || null,

	    // the calculated amount of time the instance ran
	    runtime: (function() {
	    	return moment(this.end).from(moment(this.start));
	    })(),

	    // when the instance began running (started datetime)
	    start: obj.start || new Date()
	    
	};
};