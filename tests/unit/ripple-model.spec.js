var Ripple = require('../../models/ripple.js');

describe('ripple model', function() {

  it('should create a new object when ripple constructor is called', function() {
    var ripple = new Ripple();
    expect(ripple).not.toBeNull();
  });

  it('should automatically generate an id if not provided', function() {
    var ripple = new Ripple();
    expect(ripple.id).not.toBeNull();
  });
  
  it('should default code to a sample entry if not specified', function() {
    var expectedSampleCode = 'console.log(\'Hello ripples\');';
    var ripple = new Ripple();  // no params specified
    expect(ripple.code).toBe(expectedSampleCode);
  });

  it('should allow passing code in an obj constructor', function() {
    var code = 'console.log(\'Goodbye ripples\');';
    var ripple = new Ripple({ code: code });
    expect(ripple.code).toBe(code);
  });

  it('should default display to "New Ripple" if not provided', function() {
    var expectedDisplay = 'New Ripple';
    var ripple = new Ripple();
    expect(ripple.display).toBe(expectedDisplay);
  });

  it('should allow passing display in an obj constructor', function() {
    var display = 'unit test';
    var ripple = new Ripple({ display: display });
    expect(ripple.display).toBe(display);
  });

  it('should default description to "A sample description" if not provided', function() {
    var expectedDescription = 'A sample description';
    var ripple = new Ripple();
    expect(ripple.description).toBe(expectedDescription);
  });

  it('should allow passing description in an obj constructor', function() {
    var description = 'unit test description';
    var ripple = new Ripple({ description: description });
    expect(ripple.description).toBe(description);
  });

  it('should default fork to null if not provided', function() {
    var ripple = new Ripple();
    expect(ripple.fork).toBeNull();
  });

  it('should allow passing fork in an obj constructor', function() {
    var fork = '019283-92093-19203-100092';
    var ripple = new Ripple({ fork: fork });
    expect(ripple.fork).toBe(fork);
  });

  it('should default ripples to an empty array if not provided', function() {
    var expectedRipples = [];
    var ripple = new Ripple();
    expect(ripple.ripples).toEqual(expectedRipples);
  });

  it('should allow passing ripples in an obj constructor', function() {
    var ripples = [
      new Ripple({ display: 'unit test sub 1'}),
      new Ripple({ display: 'unit test sub 2'})
    ];
    var ripple = new Ripple({ ripples: ripples });
    expect(ripple.ripples).toBe(ripples);
  });

  it('should default sampleInput to null if not provided', function() {
    var ripple = new Ripple();
    expect(ripple.sampleInput).toBeNull();
  });

  it('should allow passing sampleInput in an obj constructor', function() {
    var sampleInput = '{ firstname: \'Nicholas\', lastname: \'Barger\' }';
    var ripple = new Ripple({ sampleInput: sampleInput });
    expect(ripple.sampleInput).toBe(sampleInput);
  });

  it('should default sampleOutput to null if not provided', function() {
    var ripple = new Ripple();
    expect(ripple.sampleOutput).toBeNull();
  });

  it('should allow passing sampleOutput in an obj constructor', function() {
    var sampleOutput = '{ result: \'success\' }';
    var ripple = new Ripple({ sampleOutput: sampleOutput });
    expect(ripple.sampleOutput).toBe(sampleOutput);
  });

  it('should default version to 1 if not provided', function() {
    var expectedVersion = 1;
    var ripple = new Ripple();
    expect(ripple.version).toBe(expectedVersion);
  });

  it('should allow passing version in an obj constructor', function() {
    var version = 2;
    var ripple = new Ripple({ version: version });
    expect(ripple.version).toBe(version);
  });

  it('should default versions to an array with 1 version if not provided', function() {
    var expectedVersions = [1]
    var ripple = new Ripple();
    expect(ripple.versions).toEqual(expectedVersions);
  });

  it('should allow passing versions in an obj constructor', function() {
    var versions = [1, 2, 3];
    var ripple = new Ripple({ versions: versions });
    expect(ripple.versions).toBe(versions);
  });

});