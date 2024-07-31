# Spring Boot
- This Repo will contain the code as I learn the Spring framework. I'm following the YouTube video on the EmbarkX channel this
  is the link to the video
- The objects that form the backbone of the Spring framework and that are managed by the Spring IoC containers are called `beans`

### Features of Spring Framework
- Inversion of Control (IoC)
- Data Access
- MVC framework
- Transaction Management
- Spring Security


### Components of Spring Boot
- Spring Boot Starters
- Auto Configuration
- Sping Boot Actuator --> For monitoring
- Embedded Server
- Spring Boot Dev Tools

### Spring Boot Layers
- Presentation Layer --> Presentation layer presents the data and the application features to the user. This is the layer where in all the
  controller classes exist. Controller accepts the requests from the user validates the inputs that are passed and passes it to service
  layer.
- Service Layer --> where business logic resides in the application. Tasks such as evaluations, decision making, processing of data is done at this layer.
- Data Access Layer --> Where all the repository classes reside.
- Service Layer
- Data Access layer.

### What is JPA?
- It involves translation of objects into tables. The Java Persistence API (JPA) is a specification of Java. It is used to persist data between Java object and relational database. JPA acts as a bridge between object-oriented domain models and relational database systems.
- It is easier and simpler to follow.
- It also makes writing queries easier, and we can use entities to write queries instead of SQL.
- Easy integration with Spring Boot.
