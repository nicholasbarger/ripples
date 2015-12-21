var uuid = require('node-uuid');

module.exports = function(id, rippleId) {
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

	    // the unique id of the ripple defining this code execution
	    rippleId: null,

	    // when the instance began running (started datetime)
	    start: new Date(),

	    // the version of the ripple this ripple instance executed
	    version: 1
	    
	};
};