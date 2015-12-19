module.exports = function(data, dataTimestamp, errors, availableCount, message, success) {
  return {

    data: data || null,
    dataTimestamp: dataTimestamp || new Date(),
    errors: errors || [],
    availableCount: availableCount || 0,
    message: message || null,
    success: success || (function() {
      return errors == null || errors.length === 0;
    })()
    
  };
};