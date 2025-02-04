This is demo project for **Memento design pattern**

This is one of the **Behavioral design patterns** which is focused on externalizing and capturing an object’s internal state so that it can later be restored. When you need to add features like undo/redo functionality, history tracking, or reverting an item to a former state, this pattern is quite helpful.

Pros:
* **State Management:** The primary advantage of the Memento pattern is its ability to manage an object’s state effectively. It allows you to capture and externalize an object’s internal state without exposing its implementation details.
* **Undo/Redo Functionality:** The Memento pattern is well-suited for implementing undo and redo functionality in applications. Users can easily navigate through the history of an object’s states, providing a better user experience.
* **Maintains Encapsulation:** The pattern enforces encapsulation by ensuring that only the Originator (the object whose state is being managed) has access to the Memento’s internal state. This helps maintain the integrity of the object’s data.
* **Flexibility:** The Memento pattern is flexible and can be applied to various scenarios where you need to track and restore object states. It’s not limited to specific types of objects or use cases.
* **Versioning:** It can be used to create version control systems where you track and restore the state of objects over time. This is valuable in collaborative applications and content management systems.

Cons:
* **Memory Usage:** Storing multiple Mementos in memory can consume a significant amount of memory, especially if you have a large number of objects with complex states. This can be a concern in resource-constrained environments.
* **Performance Overhead:** The process of creating, storing, and managing Mementos can introduce some performance overhead, particularly when dealing with large objects or frequent state changes.
* **Complexity:** Implementing the Memento pattern can introduce additional complexity to your code, especially if you need to manage the history of multiple objects or if you want to implement more advanced features like branching and merging states
* **Potential for Data Leakage:** If not implemented correctly, there’s a risk of data leakage where external objects gain access to the internal state of Mementos, violating encapsulation.
* **behavioural:** In languages without built-in support for object serialization and deep cloning, implementing Mementos and restoring object states can be more challenging and error-prone.
