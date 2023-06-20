## API TEST

REST API

## Stack

* [NestJS](https://github.com/nestjs/nest)
* [TypeScript](https://github.com/nestjs/nest)
* [Mongoose](https://mongoosejs.com/)
* [MySQL](https://www.mysql.com/)
* [Jest](https://jestjs.io/)
* [Swagger](https://swagger.io/)

## Installation

Clone repository

```bash
# Using SSL method.
$ git clone git@github.com:tcsoares1914/desafio-entrevista-nodejs.git

# Using HTTPS method.
$ git clone https://github.com/tcsoares1914/desafio-entrevista-nodejs.git
```

## Running

Make shure you have [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/) installed.

```bash
# Start application containers.
$ docker-compose up -d
```

```bash
# Enter into containner.
$ docker exec -it api bash

# Install application dependencies.
$ yarn install
```

## Test

```bash
# Run unit tests.
$ yarn test

# Run test coverage.
$ yarn test:cov
