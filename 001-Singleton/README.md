This is demo project for **Signleton design pattern**

This is on of the **Structural design patterns** that restricts the class to create only one instance.

It can be considered the basics of global state management libraries such Redux or React Context.

They can be accessed globally and acts as a single access point for accessing the global state.

Pros:
 * **Controlled access to sole instance:** Because the Singleton class encapsulates its sole instance, it can have strict control over how and when clients access it.
 * **Reduced name space:** The Singleton pattern is an improvement over global variables. It avoids polluting the name space with global variables that store sole instances.
 * **Permits refinement of operations and representation:** The Singleton class may be subclassed, and it’s easy to configure an application with an instance of this extended class. You can configure the application with an instance of the class you need at run-time.
 * **Permits a variable number of instances:** The pattern makes it easy to change your mind and allow more than one instance of the Singleton class. Moreover, you can use the same approach to control the number of instances that the application uses. Only the operation that grants access to the Singleton instance needs to change.
 * **More flexible than class operations:** Another way to package a singleton’s functionality is to use class operations (that is,static member functions in C++ or class methods in Smalltalk).But both of these language techniques make it hard to change a design to allow more than one instance of a class.Moreover, static member functions inC++are never virtual, so subclasses can’t override them polymorphically.
 
Cons:
* **Single responsibility principle violation:** That is, it tries to solve two problems at the same time. It tries to solve the following problems: Ensure that a class will have only one instance, and assigning a global access point to the singleton class instance.
* **Concurrency Issues:** If not implemented carefully, Singletons can introduce concurrency issues in multi-threaded applications. You may need to use synchronization mechanisms, like locks or mutexes, to ensure safe access to the Singleton instance, which can add complexity to your code.
* **Singleton Pattern Overuse:** Due to its convenience, developers might overuse the Singleton pattern, leading to an abundance of Singleton instances in an application. This can defeat the purpose of the pattern and result in increased memory usage.
* **Initialization Overhead:** Lazy initialization, while often an advantage, can introduce some overhead when the Singleton instance is first accessed. If the initialization process is resource-intensive, it can affect the application’s startup time.
* **Difficulties in Debugging:** Debugging a Singleton-based codebase can be challenging, especially when issues related to the Singleton’s state arise. It can be hard to trace the source of problems when multiple parts of the code may have modified the Singleton’s data. It is difficult to write unit test cases for singleton classes. This is because the order of execution can change the value present in the global state, so the order of execution is important.
* **Limited Dependency Injection:** Using dependency injection and inversion of control becomes less straightforward when relying on Singleton instances. It may be challenging to inject alternative implementations or configurations because the Singleton instance is typically accessed globally.

