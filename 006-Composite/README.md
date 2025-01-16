This is demo project for **Composite design pattern**

This is one of the **Structural design patterns** that allows us to build structures so that clients can work with both individual elements and collections of elements seamlessly and consistently and makes it easy to add new types of components (individual or composite) without modifying the client code promoting flexibility and reusability.

Pros:
* **Flexibility:** The Composite design pattern allows us to treat the individual components and composite objects uniformly. so, that provides flexibility to work with both components and composites similarly.
* **Simplified client code:** As the composite design pattern provides a common interface i.e. component to interact with the methods, the client need not provide the different implementations to distinguish the individual components and composite objects.
* **Recursive Behavior:** The Composite design pattern supports the recursive traversal and processing of the composite structure. This is particularly useful for operations that must be applied recursively to all components in the structure.
* **Simplified Addition of Components:** The Composite design pattern makes it simple to add new components without modifying the client code.
* **Single Responsibility Principle:** In this pattern, Each class (leaf or composite) has a single responsibility: either representing an individual object or a composition of objects. This adheres to the Single Responsibility Principle (SRP).

Cons:
* **Complexity in implementation:** The Composite design pattern is implemented in such a way that it should handle both individual components and composite objects which is quite complex to implement.
* **Limited Abstraction:** The designing of the common interface can limit the abstraction level for some operations, it needs to be fairly general to accommodate different types of components.
* **Performance Considerations:** Depending on the implementation, operations like traversing the composite structure can potentially have a performance impact, especially as the structure grows more extensive and more complex.
