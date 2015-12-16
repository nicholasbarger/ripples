var uuid = require('node-uuid');

module.exports = function(_id) {
  return {

  	// the unique id as a guid
    _id: _id || uuid.v4(),

	// the code to execute during this ripple
    code: code || 'console.log(\'Hello ripples\');',

    // the title of the ripple code
    display: name || 'New Ripple',

    // the description of the executing code
    description,

	// original ripple if forked
    fork,

    // ripples to propegate after completion (executed in async parallel)
    ripples: [],

    // sample input JSON
    sampleInput: sampleInput || null,

    // sample output JSON
    sampleOutput: sampleOutput || null,

    // the version of this ripple
    version: 1
    
  };
};