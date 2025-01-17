This is demo project for **Builder design pattern**

This is one of the **Creational design patterns** used to construct complex objects by separating the construction process from the actual representation. It's especially useful when an object requires multiple steps or configurations to be created.

Pros:
* **Improved Object Creation:** The Builder pattern allows for the step-by-step construction of an object, making the creation process more understandable and manageable.
* **Flexible Object Construction:** It provides flexibility by allowing different configurations for constructing objects.
* **Code Readability:** The code using the Builder pattern is often more readable and self-explanatory, as method names in the builder convey the intention of the construction steps.

Cons:
* **Code Overhead:** Implementing the Builder pattern requires creating a separate builder class or methods, which can introduce additional code and complexity.
* **Not Suitable for Simple Objects:** For simple objects that do not have a significant number of properties or configurations, the Builder pattern may be overly complex.
