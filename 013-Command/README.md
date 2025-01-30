This is demo project for **Command design pattern**

This is one of the **Behavioral design patterns** that encapsulates an incoming request into a standalone object. This object contains all the necessary information to perform a request including the method to call and parameters.

The pattern helps to separate the sender information of the request and the object that processes the request. It promotes loose coupling, reusability, and flexibility in handling commands by turning requests into standalone objects. So, the objects can be processed or executed by the different parts of the application.

Pros:
* **Decoupling:** The Command method helps to decouple the sender of the request (client) and receiver of the request (Recievers) through Invoker. The client only knows how to send a request and the rest is abstracted. This gives a more generalized way to separate the tasks.
* **Flexibility and Extensibility:** The Command method makes it easier to add new changes without modifying the underlying code promoting a flexible and extensible design.
* **Undo/Redo Functionality:** The Command method stores the state of the command in the Concrete Command class which helps to restore the previous states easily.
* **Simplified Client Code:** The client or the sender needs to know how to send a request without bothering about the underlying code. This makes the client code simplified.
* **Parameterization and Queuing:** The Commands in the Command method can store specific parameters, allowing for parameterized actions. Commands can also be queued and executed in a specific order, providing control over the sequence of operations.

Cons:
* **Increased Complexity:** For smaller and simple use cases, implementing the command method potentially makes the codebase look more complex and harder to manage.
* **Memory Overhead:** For implementing Undo/Redo functionality, storing the previous state can lead to memory overhead, especially for use cases having more commands to execute.
* **Overhead of Creating Objects:** Each command demands the creation of a new object which leads to Overhead of Objects in case of use cases having more number of commands.
* **Learning Curve:** Understanding and implementing the Command Pattern might require developers to familiarize themselves with the concept, potentially resulting in a learning curve, especially for those new to design patterns.
