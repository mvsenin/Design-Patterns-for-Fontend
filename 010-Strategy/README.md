This is demo project for **Strategy design pattern**

This is one of the **Behavioral design patterns** that helps solve the problem of needing to use different methods or behaviors in your code and easily switch between them. It defines a family of algorithms, encapsulates each one, and makes them interchangeable.

It allows the client to choose an algorithm from a family of algorithms at runtime, without altering the code that uses these algorithms.

Pros:
* **Flexibility:** It allows for easy addition or modification of strategies without altering the client code.
* **Isolation:** We can isolate the specific implementation details of the algorithms from the client’s code.
* **Reusability:** Strategies can be reused across different contexts.
* **Clean Code:** Promotes a clean and modular design by separating the algorithm from the context.
* **Maintainability:** Encapsulating each algorithm or behavior within its own class, makes it easier to modify, test, and extend the codebase without affecting other parts of the code.
* **Easy Testing:** With the Strategy pattern, it becomes easier to test individual algorithms independently of the context.
* **Run-time Switching:** It is possible that application can switch the strategies at the run-time.

Cons:
* **Increased Number of Classes:** If there are many strategies, it can lead to a larger number of classes, which can be hard to manage.
* **Creating Extra Objects:** In most cases, the application configures the Context with the required Strategy object. Therefore, the application needs to create and maintain two objects in place of one.
* **Awareness among clients:** Difference between the strategies should be clear among the clients to able to select a best one for them.
* **Complexity:** Implementing the Strategy pattern can introduce additional classes and complexity into your code. Each strategy has its own class, and managing these classes can become complex for large systems.
* **Increased Code Size:** The additional classes and interfaces introduced by the Strategy pattern can lead to an increase in code size.
