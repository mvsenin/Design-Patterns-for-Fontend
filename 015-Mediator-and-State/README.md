This is demo project for **Mediator** and **State** design pattern

The demo logic is as follows:
* `AirTrafficControl` class describes the mediator class - a control center of the air traffic
* `Flight` class describes the colleague class - a flight of a plane, on the other hand it has state being changed according to state model described by the `FlightStates.ts` module
* `FlightState` parental class and its child classes describe set of the `Flight` states

The **Mediator** pattern is one of the **Behavioral design patterns** that promotes loose coupling between objects by centralizing communication between them. It's particularly useful when you have a complex system with multiple objects that need to interact and you want to avoid the tight coupling that can arise from direct object-to-object communication

Pros:
* **Decoupling:** The Mediator pattern reduces direct dependencies between objects, promoting a more loosely coupled system. Colleagues only need to know about the Mediator, not each other, which makes the system more maintainable and extensible.
* **Centralized Control:** Centralizing communication in a Mediator can simplify complex interactions in a system. This central hub can enforce rules, coordinate actions, and ensure that communication remains organized.
* **Reusability:** Mediators can be reused across different scenarios or projects. Once you have a well-defined Mediator interface or class, you can apply it to various situations where you need to manage interactions between objects.
* **Promotes Single Responsibility Principle:** The Mediator pattern encourages the Single Responsibility Principle by isolating communication-related logic in one place, making the codebase cleaner and more modular.

Cons:
* **Complexity:** In some cases, introducing a Mediator can add complexity to the system, especially if you have a small number of objects or if the interactions between objects are straightforward.
* **Performance Overhead:** Managing communication through a Mediator can introduce some performance overhead, as all messages pass through this central point. However, this overhead is usually negligible in most applications.
* **Maintaining the Mediator:** If the system becomes overly complex or if there are frequent changes in communication requirements, maintaining the Mediator can become challenging.
* **Potential for God Object:** Care should be taken not to turn the Mediator into a "God Object" that knows too much about the system. It should focus on facilitating communication, not on handling all logic.

The **State** pattern is one of the **Behavioral design patterns** that allows an object to alter its behavior when internal state changes occur. This pattern is used when an object wants to change its state dynamically. When we want to change behavior of object it internally uses if-else block to perform actions 
Pros:
* **Clean Code:** The state pattern facilitates code pattern and organization. This fosters code cleanliness and enhances maintainability to provide best Output.
* **Flexibility:** The State Method makes it easier to add states without affecting the behavior of other states. When there are changes in requirements it is flexible.
* **Readability:** Code is more readable as the logic associated with each state is isolated in its own class. This makes it easier for developers to understand.
* **Scalability:** Adding new states is easier because each state is encapsulated in its own class. This makes the code more scalable.
* **Encapsulation:** Each state is encapsulated in its own class. This reduces complexity of the system.
* **Reusability:** States can be reused by different objects. This helps in code reusability.

Cons:
* **More Number Of States:** In case of many states code becomes complex.
* **Learning Curve and Understandability:** People who are not familiar with the State pattern and methods might find it difficult to understand the concept of state transitions and machines.
* **Overheads:** There might be a slight performance overhead associated with state transitions and the deputation of behavior to different state methods and classes.
* **Applicability:** Some situations where the state changes are minimal/less, using the State pattern might be an overkill.
