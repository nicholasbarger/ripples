Ripples is a framework for developing software online in small increments.

For each ripple, you will develop some code and then optionally call one or 
more ripples to fire off.

Ripples uses node.js to execute code and json to transfer data betwen ripples.
Ripples are coordinated through the use of message bus architecture, 
specifically queues and topics.

Each ripple you create, you are required to include one or more unit tests to
confirm the behavior of the code in the ripple.  This enforcement of tests
may seem like overhead but due to the potential complexity of orchestrated
ripples it is important to ensure each link in the chain is reliable.
