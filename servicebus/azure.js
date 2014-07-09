var azure = require('azure');

module.exports = function() {
  return {
    createMessage: createMessage
  };
  
  var serviceBusService = azure.createServiceBusService();
  var queueService = null;
  serviceBusService.createQueueIfNotExists('ripple-queue', function(error){
      if(!error){
        // queue exists, continue
        var retryOperations = new azure.ExponentialRetryPolicyFilter();
        queueService = azure.createQueueService().withFilter(retryOperations);
      }
  });
  
  var createMessage = function(queue, msg) {
      queueService.createMessage(queue, msg, function(error) {
        if(!error) {
          // message inserted
        }
      });
  };
};