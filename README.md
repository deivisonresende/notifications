<h1 align="center">Notification microservice</h1>

A simple Node.js backend microservice developed as an exercise of Nest.js and its weakly coupled application architecture, as well as its native microservices support.

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



## Tecnologias

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 
![Apache Kafka](https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
