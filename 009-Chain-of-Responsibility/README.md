This is demo project for **Object Pool design pattern**

This is one of the **Behavioral design patterns** that allows an object to pass a request along a chain of handlers. Each handler in the chain decides either to process the request or to pass it along the chain to the next handler.

Pros:
* **Decoupling of Objects:** The pattern makes enables sending a request to a series of possible recipients without having to worry about which object will handle it in the end. This lessens the reliance between items.
* **Flexibility and Extensibility:** New handlers can be easily added or existing ones can be modified without affecting the client code. This promotes flexibility and extensibility within the system.
* **Dynamic Order of Handling:** The sequence and order of handling requests can be changed dynamically during runtime, which allows adjustment of the processing logic as per the requirements.
* **Simplified Object Interactions:** It simplifies the interaction between the sender and receiver objects, as the sender does not need to know about the processing logic.
* **Enhanced Maintainability:** Each handler performs a specific type of processing, which making maintaining and modifying the individual components easier without impacting the overall system.

Cons:
* **Possible Unhandled Requests:** The chain should be implemented correctly otherwise there is a chance that some requests might not get handled at all, which leads to unexpected behavior in the application.
* **Performance Overhead:** The request will go through several handlers in the chain if it is lengthy and complicated, which could cause performance overhead. The processing logic of each handler has an effect on the system’s overall performance.
* **Complexity in Debugging:** The fact that the chain has several handlers can make debugging more difficult. Tracking the progression of a request and determining which handler is in charge of handling it can be difficult.
* **Runtime Configuration Overhead:** It may become more difficult to manage and maintain the chain of responsibility if the chain is dynamically modified at runtime.
