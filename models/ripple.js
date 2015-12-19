var uuid = require('node-uuid');

module.exports = function(id) {
  return {

  	// the unique id as a guid
    id: id || uuid.v4(),

	// the code to execute during this ripple
    code: 'console.log(\'Hello ripples\');',

    // the title of the ripple code
    display: 'New Ripple',

    // the description of the executing code
    description: 'A sample description',

	// original ripple if forked
    fork: null,

    // ripples to propegate after completion (executed in async parallel)
    ripples: [],

    // sample input JSON
    sampleInput: null,

    // sample output JSON
    sampleOutput: null,

    // the version of this ripple
    version: 1
    
  };
};