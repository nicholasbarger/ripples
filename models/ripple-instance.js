var uuid = require('node-uuid');

module.exports = function(_id) {
	return {

		// the unique id of this ripple instance
		_id: _id || uuid.v4(),

	    // the input received to execute this ripple instance
	    input,

	    // the unique id of the ripple defining this code execution
	    rippleId,

	    // the generated output for this ripple instance
	    output,

	    // the version of the ripple this ripple instance executed
	    version: 1
	    
	};
};