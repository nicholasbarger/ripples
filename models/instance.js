var uuid = require('node-uuid');

module.exports = function(id, ripple) {
	return {

		// the unique id of this ripple instance
		id: id || uuid.v4(),

		// when the instance finished running
		end: null,

	    // the input received to execute this ripple instance
	    input: null,

	    // the original instance that started the entire chain
	    originalInstanceId: null,

	    // the generated output for this ripple instance
	    output: null,

	    // the parent ripple defining this code execution
	    ripple: ripple || null,

	    // the calculated amount of time the instance ran
	    runtime: (function() {
	    	this.end - this.start;
	    })(),

	    // when the instance began running (started datetime)
	    start: new Date()
	    
	};
};