# Design Patterns for Fontend
Please find a few demo projects with several design patterns for frontend. Please note all projects are based on Nodejs, so you'll need to have node & npm on your machine, also don't forget to install the dependencies for each project from the package.json by calling **npm install** command in the project's folder.

Below you can see the list (to be updated per demo prepatation and readiness) of demos for the design patterns grouped as follows:

#  Creational patterns

> Creational patterns abstracts object instantiation process, given this the system becomes independent of the details how objects are created, composed, and represented.

| Pattern name | Variable aspects | Scenarios |
|--------------|------------------|-----------|
| 1.&nbsp;Singleton  <br /> <br /> <br /> <br /> <br />| The sole instance of a class  <br /> <br /> <br /> <br /> <br />| Global logger service <br /> Global state data <br /> Hardware interface access <br /> Managing Shared Resources (Cache) <br /> Service Classes <br /> Configuration File |
| 2.&nbsp;Builder <br />| Object's steps or configurations to be created <br />| Complex Object Creation <br /> Object Initialization Flexibility |
| 3.&nbsp;Object pool <br />| Set of reusable objects in a pool <br />| Web testing (e.g. instances of Selenium WebDriver) <br /> Database connection management |

# Structural patterns

> Structural patterns are a group of patterns that describe the relationships between entities and how those relationships should be formed. They help us to determine how our objects should interact with each other, which makes it easier for us to design clean and flexible systems. <br />
> The structural design patterns are classic solutions to recurring problems in object-oriented systems. They help programmers to organize their code in a way that’s flexible and easy to maintain, even as the system evolves over time. Structural design patterns can be applied at different levels of abstraction, from low-level details of how classes are used to high-level organization of entire systems.

| Pattern name | Variable aspects | Scenarios |
|--------------|------------------|-----------|
| 1.&nbsp;Facade    | Functionality in one or more subsystems | It is often present in systems that are built around a multi-layer architecture |
| 2.&nbsp;Adapter    | Classes/objects having different/legacy interfaces | Integrating Legacy Code  <br />  Working with Third-Party APIs <br /> Database Connectivity <br /> File Format Conversion <br /> Data Transformation <br /> Version Upgrades |
| 3.&nbsp;Composite    | Different objects which are put together to create a structure with parts and wholes handled in a similar way | Processing hierarchical structures and collections |


# Behavioral patterns
> Behavioral Patterns are concerned with algorithms and the assignment of responsibilities between objects.
> They describe not just patterns of objects or classes but also the patterns of communication between them.
> These patterns characterize complex control flow that’s difficult to follow at run-time. 

| Pattern name | Variable aspects | Scenarios |
|--------------|------------------|-----------|
| 1.&nbsp;Observer  | Number of objects that depend on another object; how the dependent objects stay up to date | Immediately updating all of the dependents (observers) of the subject and notified on its changes |
| 2.&nbsp;Publisher/Subscriber  | Number of objects that subscribes/listen to other object(s); how the listening objects stay up to date | System handling the sending and receiving of messages, e.g. chat apps |

Good luck.
