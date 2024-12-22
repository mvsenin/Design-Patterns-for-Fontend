This is demo project for **Facade design pattern**

This is one of the **Structural design patterns** that allows users to create a simple interface that hides the complex implementation details of the system making it easier to use.

This pattern intends to create a simplified and unified interface for a set of interfaces hiding the implementation details making it less complex to use.

Pros:
 * **Simplified Interface:** The Facade design pattern uses a simplified interface which helps the client to interact with and perform operations without knowing the implementation details.
 * **Abstraction and Encapsulation:** The Facade design pattern abstracts the internal implementation details and Encapsulates the Subsystem's logic.
 * **Reduced Complexity:** As the Facade design pattern hides the implementation details for the client, there is reduced complexity and cognitive load on the client. so, the client can focus on the system's working rather than the subsystem's implementation.
 * **Improved Maintainability:** As the common interface provided by the Facade class serves as an accessing entry point, it also acts as a centralized way to make changes to the subsystem, providing an easier way to maintain the subsystem.
 * **Enhanced Reusability:** The simplified interface provided by the facade makes it easier to reuse the subsystem across multiple parts of the application or in different applications.

Cons:
 * **Limited Functionality Exposure:** The Facade design pattern may restrict the client from accessing the functionality of certain operation of the subsystem without knowing the actual implementation details.
 * **Potential Performance Overhead:** In some cases, Relying on the facade design pattern may lead to Performance overhead due to the additional layer of Abstraction.
 * **Potential Design Misuse:** In some cases, taking the advantage of hiding the implementation details developers may hide up the poor implementation or design issues.
