This is demo project for **Factory Method** and **Abstract Factory** design patterns

These are **Creational design patterns**:

# Factory Method

Factory Method pattern allows for the creation of objects without exposing the creation logic to the client. It involves creating a separate factory function that is responsible for creating instances of various related objects based on a specified input, creating objects while abstracting away the specifics of their creation.

Pros:
* **Abstraction and Encapsulation:** The factory function encapsulates the logic for creating objects based on role, abstracting away the creation details. Users of the factory don't need to worry about the intricate creation process.
* **Simplified Object Creation:** The factory pattern simplifies object creation. Users only need to call a function, passing the necessary parameters, to get a fully initialized object.
* **Flexibility and Extensibility:** The factory can easily accommodate changes and additions of new user roles. Adding a new role is a matter of extending the specific information and adding a function to the specificInfo object.
* **Code Reusability:** The creation logic is centralized in the factory function, allowing for reusability across the application. Users can be created consistently wherever needed.
* **Enhanced Readability and Maintainability:** The factory pattern improves code readability by abstracting the object creation process. It's easier to understand the intent of creating a specific type of user by calling a function with a role.
* **Error Handling:** The factory can provide structured error handling, ensuring that users adhere to specific roles and fail gracefully with meaningful error messages.

Cons:
* **Complexity for Simple Cases:** For simple cases where the object creation logic is straightforward, using a factory might introduce unnecessary complexity. Direct object creation might be more appropriate for such scenarios.
* **Potential Performance Overheads:** The additional function calls and lookup operations in the factory can introduce a minor performance overhead compared to direct object creation. However, in most cases, this overhead is negligible.
* **Understanding the Factory Logic:** For someone unfamiliar with the factory pattern, understanding the role of each function and how the factory creates objects might take some time.
* **Dependency on External Configuration:** The factory relies on external configurations (like the specificInfo object) to determine object creation. If these configurations are modified or incorrect, it can lead to unexpected behavior.
* **Potential Overuse:** Overuse of the factory pattern can lead to an overly complex codebase, making it harder to understand and maintain. It's important to use the pattern judiciously and where it provides clear benefits.

# Abstract Factory

Abstract Factory abstracts the process of object creation by defining a family of related factory methods, each responsible for creating a different type of object. These factory methods are organized within an abstract factory interface or class, and the client code uses this interface to create objects.

Pros:
* **Consistency:** Abstract factories patterns ensure that the objects created within a family are compatible with each other. This helps us to maintain the consistency in our application, as we can ensure that all the objects created by the factory work together.
* **Flexibility:** Abstract Factory pattern allows us to switch between different families of objects by using different concrete factories. This is especially useful when we need to support multiple variations of a product or when we want to change the behavior of our application by swapping out factories at runtime.
* **Extensibility:** Basically, we can add new concrete factories to support new product families without modifying existing client code. This makes the system more extensible, allowing for the easy addition of new features or components.
* **Testability:** Abstract factories patterns make it very easier to write unit tests and mock objects. By creating a factory interface, we can simply create mock or test-specific implementations to facilitate testing without affecting the rest of our code.
* **Encapsulation of Object Creation:** Abstract Factory pattern encapsulates the creation of objects. This means that the client code does not need to be aware of the specific classes it is instantiating, promoting loose coupling between the client and the concrete objects.

Cons:
* **Tight Coupling:** Suppose if we needs to add new products or make changes to existing ones, than we need to modify both the abstract factory interface and the concrete factory implementations. This can lead to tight coupling between the factories and their products, potentially violating the Open-Closed Principle.
* **Increased Complexity:** We need to define interfaces for factories and their product families, create concrete factory implementations, and manage the relationships between factories and products.
* **Code Duplication:** While implementing concrete factories patterns for different product families, we end up with duplicate code for creating similar types of objects across multiple factories.
* **Reduced Runtime Flexibility:** Once we choose a concrete factory to create objects, it is typically challenging to switch to a different factory at runtime. This limitation can restrict your ability to adapt to changing requirements dynamically.
* **Limited Use Cases:** Abstract Factory pattern is most valuable in scenarios where there are multiple related product families with interchangeable components. In simpler applications, the overhead of implementing and maintaining factories may not be justified.
