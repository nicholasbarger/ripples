module.exports = function(input) {
  var errors = [];
  var isValid = false;
  
  // rules
  if(input.firstName == null || input.firstName === '') {
    errors.push('First name was not specified.');
  }
  if(input.lastName == null || input.lastName === '') {
    errors.push('Last name was not specified.');
  }
  if(input.email == null || input.email === '') {
    errors.push('Email was not specified.');
  }
  if(input.message == null || input.message === '') {
    errors.push('Message was not specified.');
  }

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
};