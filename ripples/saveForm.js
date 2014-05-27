module.exports = function(input) {
  var errors = [];
  var isValid = false;
  
  // validate form
  callValidateFormRipple(input, function() {
    // fake: save to db

    // clean up response
    if(errors.length === 0) {
      errors = null;
      isValid = true;
    }
    else {
      isValid = false;
    }

    var output = {
      isValid: isValid,
      errors: errors
    }

    return output;  
  });
};

function callValidateFormRipple(input, callback) {
  var http = require('http');

  var inputJSON = JSON.stringify(input);
  
  var headers = {
    'Content-Type': 'application/json',
    'Content-Length': inputJSON.length
  };

  var options = {
    host: 'http://127.0.0.1',
    port: 8080,
    path: '/execute/validateForm',
    method: 'POST',
    headers: headers
  };

  // Setup the request.  The options parameter is
  // the object we defined above.
  var req = http.request(options, function(res) {
    res.setEncoding('utf-8');

    var responseString = '';

    res.on('data', function(data) {
      responseString += data;
    });

    res.on('end', function() {
      var resultObject = JSON.parse(responseString);
      console.log('done');
      console.log(resultObject);
    });
  });

  req.on('error', function(e) {
    // TODO: handle error.
    console.log(e);
  });

  req.write(inputJSON);
  req.end();
}