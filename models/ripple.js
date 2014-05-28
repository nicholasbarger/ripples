var uuid = require('node-uuid');

module.exports = function(_id, name, description, code, sampleInput, sampleOutput) {
  return {
    _id: _id || uuid.v4(),
    name: name || null,
    description: description || null,
    code: code || 'console.log(\'Hello ripples\');',
    sampleInput: sampleInput || null,
    sampleOutput: sampleOutput || null
  };
};