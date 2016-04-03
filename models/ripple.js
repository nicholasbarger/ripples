var uuid = require('node-uuid');

module.exports = function(obj) {
  return {

  	// the unique id as a guid
    id: obj.id || uuid.v4(),

	// the code to execute during this ripple
    code: obj.code || 'console.log(\'Hello ripples\');',

    // the title of the ripple code
    display: obj.display || 'New Ripple',

    // the description of the executing code
    description: obj.description || 'A sample description',

	// original ripple if forked
    fork: obj.fork || null,

    // ripples to propegate after completion (executed in async parallel)
    ripples: obj.ripples || [],

    // sample input JSON
    sampleInput: obj.sampleInput || null,

    // sample output JSON
    sampleOutput: obj.sampleOutput || null,

    // the version of this ripple
    version: obj.version || 1,
    
    // additional versions available for this ripple
    versions: obj.versions || []
  };
};