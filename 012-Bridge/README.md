This is demo project for **Bridge design pattern**

This is one of the **Structural design patterns** offering a way to separate a system's abstractions from its implementations.

At its core, the Bridge pattern is about creating a bridge between two potentially complex systems, ensuring that changes in one will not affect the other. Imagine a bustling city with two sides separated by a river. Without a bridge, crossing from one side to the other would be a challenge, especially as the city grows and traffic increases. But with a bridge, the two sides can operate independently, yet remain connected in a controlled manner. 

In software terms, the "city" represents our system's functionalities, the "river" represents the system's complexities, and the "bridge" represents the design pattern that connects and manages these complexities.

Pros:
* **Decoupling of Abstraction and Implementation:** The primary benefit of the Bridge pattern is the separation of the abstraction from its implementation. This decoupling ensures that changes in the abstraction hierarchy don't affect the implementation hierarchy and vice versa.
* **Improved Extensibility:** Both the abstraction and its implementation can be extended independently. This means you can add new operations to the abstraction or introduce new implementations without altering existing code.
* **Single Responsibility Principle:** The pattern adheres to the Single Responsibility Principle, ensuring that a class has only one reason to change. This makes the system more maintainable.
* **Composition Over Inheritance:** The Bridge pattern prefers composition over inheritance, which provides more flexibility in the structuring of code. This means you can change the behavior of an object at runtime by changing its composition rather than its class.
* **Reduces Class Explosion:** In systems where classes can be combined in multiple ways, the Bridge pattern can drastically reduce the number of resulting classes.

Cons:
* **Increased Complexity:** While the pattern promotes flexibility, it can introduce complexity in the codebase, especially when there are multiple levels of abstraction and implementation. This can make the system harder to understand for newcomers.
* **Initial Setup Overhead:** Setting up the Bridge pattern can seem like an overhead, especially for simpler scenarios where such a level of decoupling might not be necessary.
* **Requires Deep Understanding:** For the pattern to be effective, developers need to understand its intent thoroughly. Misuse or overuse can lead to an overly complicated design.
* **Potential Performance Overhead:** The indirection introduced by the bridge can, in some scenarios, introduce a slight performance overhead. However, in most cases, this overhead is negligible.
