<h1 align="center">Notification microservice</h1>

A Node.js back-end API developed as an exercise of Nest.js and its weakly coupled application architecture, as well as its native microservices support. 

This API has the following use cases:

* Create a notification 
* Count notifications by recipient
* List all notification by recipient
* Set a notification as a read
* Set a notification as a unread
* Cancel a notification

In additional, to make the microservice not so simple, we use the pub/sub pattern to receive messages of new notifications in a Kafka topic through [Upstash](https://upstash.com/).

## Usage

- Sign up on Upstash and create a Kafka cluster 
- Clone this repository;
- Copy your topic's connection settings, than paste on `super` in src/infra/messaging/kafka/kafka-consumer.service.ts
- Install the dependences with `npm i`;
- Start the server with `npm run start:dev`;

In the Root of the project, there is a postman collection with the requests of the use cases mentioned above.
