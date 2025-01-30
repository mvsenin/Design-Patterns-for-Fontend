# Design Patterns for Fontend
Please find a few demo projects with several design patterns for frontend. Please note all projects are based on Nodejs, so you'll need to have node & npm on your machine, also don't forget to install the dependencies for each project from the package.json by calling **npm install** command in the project's folder.

Below you can see the list (to be updated per demo prepatation and readiness) of demos for the design patterns grouped as follows:

#  Creational patterns

> Creational patterns abstracts object instantiation process, given this the system becomes independent of the details how objects are created, composed, and represented.

| Pattern name | Variable aspects | Sample Scenarios |
|--------------|------------------|-----------|
| 1.&nbsp;[Singleton](001-Singleton)  <br /> <br /> <br /> <br /> <br />| The sole instance of a class  <br /> <br /> <br /> <br /> <br />| Global logger service <br /> Global state data <br /> Hardware interface access <br /> Managing Shared Resources (Cache) <br /> Service Classes <br /> Configuration File |
| 2.&nbsp;[Builder](007-Builder) <br />| Object's steps or configurations to be created <br />| Complex Object Creation <br /> Object Initialization Flexibility |
| 3.&nbsp;[Object pool](008-Object-Pool) <br />| Set of reusable objects in a pool <br />| Web testing (e.g. instances of Selenium WebDriver) <br /> Database connection management |
| 4.&nbsp;[Factory&nbsp;method](011-Factories) <br />| Logic of object creation <br />| Configuration management <br /> Database connection management |
| 5.&nbsp;[Abstract&nbsp;factory](011-Factories) <br />| Types/classes of objects to be created <br />| UI component libraries <br /> Database connection management |

# Structural patterns

> Structural patterns are a group of patterns that describe the relationships between entities and how those relationships should be formed. They help us to determine how our objects should interact with each other, which makes it easier for us to design clean and flexible systems. <br />
> The structural design patterns are classic solutions to recurring problems in object-oriented systems. They help programmers to organize their code in a way that’s flexible and easy to maintain, even as the system evolves over time. Structural design patterns can be applied at different levels of abstraction, from low-level details of how classes are used to high-level organization of entire systems.

| Pattern name | Variable aspects | Sample Scenarios |
|--------------|------------------|-----------|
| 1.&nbsp;[Facade](002-Facade)    | Functionality in one or more subsystems | It is often present in systems that are built around a multi-layer architecture |
| 2.&nbsp;[Adapter](005-Adapter)  | Classes/objects having different/legacy interfaces | Integrating Legacy Code  <br />  Working with Third-Party APIs <br /> Database Connectivity <br /> File Format Conversion <br /> Data Transformation <br /> Version Upgrades |
| 3.&nbsp;[Composite](006-Composite) | Different objects which are put together to create a structure with parts and wholes handled in a similar way | Processing hierarchical structures and collections |
| 4.&nbsp;[Bridge](012-Bridge)     | Implementations covered by under common abstraction | Operations that need to work on multiple platforms <br /> UI libraries |


# Behavioral patterns
> Behavioral Patterns are concerned with algorithms and the assignment of responsibilities between objects.
> They describe not just patterns of objects or classes but also the patterns of communication between them.
> These patterns characterize complex control flow that’s difficult to follow at run-time. 

| Pattern name | Variable aspects | Sample Scenarios |
|--------------|------------------|-----------|
| 1.&nbsp;[Observer](003-Observer)  | Number of objects that depend on another object; how the dependent objects stay up to date | Immediately updating all of the dependents (observers) of the subject and notified on its changes |
| 2.&nbsp;[Publisher/Subscriber](004-Publisher-Subscriber)  | Number of objects that subscribes/listen to other object(s); how the listening objects stay up to date | System handling the sending and receiving of messages, e.g. chat apps |
| 3.&nbsp;[Chain of Responsibility](009-Chain-of-Responsibility)  | Chain of multiple objects with single successor, or a tree-like structure | Loose coupling between the sender and receiver <br /> Dynamic Chaining <br /> Single Responsibility Principle <br /> Sequential Order <br /> Fallback Mechanism |
| 4.&nbsp;[Strategy](010-Strategy)  | Set of methods, behaviors, algorithms | Algorithm Selection <br /> Behavioral Variations <br /> Complex Decision-making Logic <br /> Dynamic Runtime Behavior |
| 5.&nbsp;[Command](013-Command)  | Set of commands | Control of state(s) <br />  |

Good luck.
