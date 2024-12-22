This is demo project for **Signleton design pattern**

This is on of the **Structural design patterns** that restricts the class to create only one instance.

It can be considered the basics of global state management libraries such Redux or React Context.

They can be accessed globally and acts as a single access point for accessing the global state.

Pros:
 * It makes sure that only a single instance of the class is created.
 * There is a single access point to the instance that can be accessed globally.
 
Cons:
* It violates the single responsibility principle. That is, it tries to solve two problems at the same time. It tries to solve the following problems: Ensure that a class will have only one instance, and assigning a global access point to the singleton class instance.
* It is difficult to write unit test cases for singleton classes. This is because the order of execution can change the value present in the global state, so the order of execution is important.
* While writing unit tests, there is a risk of another component or a module might be changing the global state value/instance. In such scenarios, it becomes difficult to debug the error.
