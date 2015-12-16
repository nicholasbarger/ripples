module.exports = function(data, dataTimestamp, errors, availableCount, message, success) {
  return {

    data: data || null,
    dataTimestamp: data || null,
    errors: errors || null,
    availableCount: availableCount || 0,
    message: message || null,
    success: success || function() {
      return errors == null || errors.length === 0;
    }
    
  };
};