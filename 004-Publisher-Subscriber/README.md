This is demo project for **Publisher/Subscriber design pattern**

This is one of the **Behavioral patterns** that promotes loose coupling and scalability. This pattern revolves around dispatching messages from publishers to an unspecified number of subscribers or listeners, thereby promoting a many-to-many dependency between objects.

There are several behavioral design patterns deal with separating our code into smaller, more manageable chunks.

Pros:
* **Decoupling:** Publishers and subscribers operate independently, allowing for easier maintenance and scalability. Changes to one do not necessitate changes to the other12.
* **Scalability:** The architecture can handle a large number of publishers and subscribers without impacting performance. New subscribers can be added seamlessly, which is beneficial for systems that need to scale dynamically17.
* **Simplified Communication:** By eliminating direct point-to-point connections, the Pub/Sub model simplifies integration code, making it easier to manage communications across different components12.
* **Asynchronous Messaging:** Messages can be sent without waiting for subscribers to process them, enhancing system responsiveness and efficiency36.
* **Flexibility:** The system allows for dynamic subscription management, enabling subscribers to join or leave topics at runtime without affecting publishers37.
* **Reliability:** Utilizing a message broker can ensure reliable message delivery, even if some subscribers are offline, as the broker can store messages until they are received7.

Cons:
* **Message Ordering Issues:** The Pub/Sub pattern does not guarantee the order in which messages are delivered, which can be problematic for applications that require sequential processing of messages23.
* **Potential for Message Loss:** Since there is no direct connection between publishers and subscribers, failed message deliveries can occur without notification, leading to potential data loss67.
* **Increased Complexity:** The introduction of a message broker and the management of subscriptions can complicate system architecture, particularly for smaller applications where direct communication might suffice34.
* **Administrative Overhead:** Managing multiple connections and subscriptions can lead to increased administrative overhead, especially as the number of subscribers grows15.
* **Security Concerns:** The decoupling may expose the system to vulnerabilities if not properly secured, as malicious publishers could potentially send harmful messages to subscribers56.

In summary, while the Publisher/Subscriber pattern offers significant advantages in terms of flexibility and scalability, it also presents challenges related to message ordering, delivery reliability, and system complexity that must be carefully managed.
