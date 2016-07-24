var uuid = require('node-uuid');

var Error = require('../../models/error.js');
var Payload = require('../../models/payload.js');
var Ripple = require('../../models/ripple.js');

xdescribe('api routes', function() {
  it('should allow returning a list of all ripples for the logged in user', function() {
    // todo: need a user guid
    var userId = uuid.v4();
    var stubbedRipples = [
      new Ripple(uuid.v4(), 'Unit Test - Get all ripples for user', 'This is a unit test.', 'console.log(\'Hello ripples.\');', null, null),
      new Ripple(uuid.v4(), 'Unit Test2 - Get all ripples for user', 'This is also a unit test.', 'console.log(\'Hello ripples2.\');', null, null)
    ];
    expect(ripples).toBe(stubbedRipples);
  });
  
  it('should allow returning a specific ripple by id', function() {
    // todo
    expect(ripple).toBe(stubbedRipple);
  });
  
  it('should allow creating a new ripple by specifying the unique _id', function() {
    // todo
    expect(ripple).toBe(stubbedRipple);
  });
  
  it('should allow creating a new ripple and auto-filling an _id if not specified', function() {
    // todo
    var _id = null;
    expect(ripple).toBe(stubbedRipple);
  });
  
  it('should allow updating an existing ripple', function() {
    // todo
    expect(ripple).toBe(stubbedRipple);
  });
  
  it('should allow executing a ripple by specified _id', function() {
    // todo
    expect(api.execute).toHaveBeenCalled();
  });
  
  it('should throw a 404 error if a matching route is not found', function() {
    // todo
    expect(false);
  });
  
  it('should throw an error if updating a ripple without the required fields', function() {
    var name = null;
    var description = null;
    var code = null;
    
    var stubbedErrors = [
      new Error('Validation', 'The name is required.', 'name'),
      new Error('Validation', 'The description is required.', 'description'),
      new Error('Validation', 'Some code to execute is required.', 'code')
    ];
    
    expect(payload.errors).toBe(stubbedErrors);
  });
  
  it('should throw an error if the sample input is not valid json', function() {
    var badSampleInput = 'Hello ripples';
    var stubbedErrors = [
      new Error('Validation', 'The sample input must be valid json, try jslint first.', 'sampleInput')
    ];
    
    expect(payload.errors).toBe(stubbedErrors);
  });
  
  it('should throw an error if the sample output is not valid json', function() {
    var badSampleOutput = 'output: true';
    var stubbedErrors = [
      new Error('Validation', 'The sample output must be valid json, try jslint first.', 'sampleInput')
    ];
    
    expect(payload.errors).toBe(stubbedErrors);
  });
  
  it('should throw an error if the ripple specifies code that is invalid', function() {
    // todo: this may be difficult to do, but it would be good validation
    // to not allow the code to be saved if it can not be validated.
    expect(false);
  });
});