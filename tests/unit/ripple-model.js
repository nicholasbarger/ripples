var Ripple = require('../../models/ripple.js');

describe('ripple model', function() {
  it('should allow you to specify an _id') {
    var _id = '019283-92093-19203-100092';
    var ripple = new Ripple(_id);
    expect(ripple._id).toBe(_id);
  };
  
  it('should automatically generate an _id if not provided') {
    var _id = null;
    var ripple = new Ripple(_id);
    expect(ripple._id.toNotBe(_id));
  };
  
  it('should default code to a sample entry if not specified') {
    var expectedSampleCode = 'console.log(\'Hello ripples\');';
    var ripple = new Ripple();  // no params specified
    expect(ripple.code).toBe(expectedSampleCode);
  };
  
  it('should allow entering all params in the constructor') {
    var _id = '019283-92093-19203-100092';
    var name = 'unit test';
    var description = 'this is a sample unit test ripple';
    var code = 'console.log(\'unit test {{input.number}}\');';
    var sampleInput = '{ input: { number: 1} }';
    var sampleOutput = '{ output: { result: 'unit test 1' } }';
    var ripple = new Ripple(_id, name, description, code, sampleInput, sampleOutput);
    var expectedRipple = {
      _id: _id,
      name: name,
      description: description,
      code: code,
      sampleInput: sampleInput,
      sampleOutput: sampleOutput
    };
    
    expect(ripple).toBe(expectedRipple);
  };
});