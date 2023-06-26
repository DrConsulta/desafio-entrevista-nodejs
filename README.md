## API TEST (desafio-entrevista-nodejs)

REST API to manage vehicles, parking lots and entrance and exit of vehicles.

- Content
    -[Stack](#stack)
    -[Installation](#installation)
    -[Running](#running)
    -[Endpoints](#endpoints)
        -[Healt Check](#health-check)
        -[Authentication](#authentication)
        -[Vehicles](#vehicles)
        -[Parking Lots](#parking-lot)
        -[Parking Lots In Out](#parking-lot-in-out)
    -[Tests](#tests)

## Stack <a name="stack"></a>

* [NestJS](https://github.com/nestjs/nest)
* [TypeScript](https://github.com/nestjs/nest)
* [TypeORM](https://typeorm.io/)
* [MySQL](https://www.mysql.com/)
* [Jest](https://jestjs.io/)
* [Swagger](https://swagger.io/)

## Installation <a name="installation"></a>

Clone repository

```bash
# Using SSL method.
$ git clone git@github.com:tcsoares1914/desafio-entrevista-nodejs.git

# Using HTTPS method.
$ git clone https://github.com/tcsoares1914/desafio-entrevista-nodejs.git
```

Access repository directory.

```bash
# Copy .env.example as .env.
$ cd desafio-entrevista-nodejs/
```

Make a copy of .env for project.

```bash
# Copy .env.example as .env.
$ cp .env.example .env
```

## Running <a name="running"></a>

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

## Endpoints <a name="endpoints"></a>

For complete details of endpoints, params and requires please check [API Documentation](http://localhost:3000/swagger).

### Health Check <a name="health-check"></a>

* For check API healty.

```bash
# Check health of API
# Method: GET /
$ curl http://localhost:3000/

# Response: 200
{"healthy":true,"name":"Parking Lot API","version":"0.0.1"}
```

### Authentication <a name="authentication"></a>

* Authenticate user for generate access token.

```bash
# Method: POST /auth/login
$ curl -X POST http://localhost:3000/auth/login -d '{"email": "admin@parkinglot.com", "password": "password"}' -H "Content-Type: application/json"

# Response: 200
{"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWRtaW5AcGFya2luZ2xvdC5jb20iLCJpYXQiOjE2ODc3NjEzOTl9.my4MLXefPrCHYhkjGEtIcpcyKzbgKoEEk3UJ9vu5_UM"}
```

* Get authenticate user by token.

```bash
# Request: POST /auth/login
$ curl http://localhost:3000/auth/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWRtaW5AcGFya2luZ2xvdC5jb20iLCJpYXQiOjE2ODc3NjEzOTl9.my4MLXefPrCHYhkjGEtIcpcyKzbgKoEEk3UJ9vu5_UM"

# Response: 200
{"sub":1,"email":"admin@parkinglot.com","iat":1687761399}
```

### Vehicles. <a name="vehicles"></a>

* Create a new vehicle.

```bash
# Method: POST /vehicle
$ curl -X POST http://localhost:3000/vehicle -d '{"brand": "Honda", "model": "Civic", "collor": "Black", "licensePlate": "AAA 0000", "type": "Car"}' -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWRtaW5AcGFya2luZ2xvdC5jb20iLCJpYXQiOjE2ODc3NjEzOTl9.my4MLXefPrCHYhkjGEtIcpcyKzbgKoEEk3UJ9vu5_UM"

# Response: 201
{"id":1,"brand":"Honda","model":"Civic","collor":"Black","licensePlate":"AAA 0000","type":"Car","createdAt":"2023-06-26T06:53:25.392Z","updatedAt":"2023-06-26T06:53:25.392Z"}
```

* Find all vehicles.

```bash
# Method: GET /vehicle
$ curl -X GET http://localhost:3000/vehicle -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWRtaW5AcGFya2luZ2xvdC5jb20iLCJpYXQiOjE2ODc3NjEzOTl9.my4MLXefPrCHYhkjGEtIcpcyKzbgKoEEk3UJ9vu5_UM"

# Response: 200
[{"id":1,"brand":"Honda","model":"Hornet","collor":"Red","licensePlate":"CCC 1212","type":"Motorcycle","createdAt":"2023-06-26T04:44:57.155Z","updatedAt":"2023-06-26T04:44:57.155Z"}]
```

* Find one vehicle.

```bash
# Method: GET /vehicle/{id}
$ curl -X GET http://localhost:3000/vehicle/1 -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWRtaW5AcGFya2luZ2xvdC5jb20iLCJpYXQiOjE2ODc3NjEzOTl9.my4MLXefPrCHYhkjGEtIcpcyKzbgKoEEk3UJ9vu5_UM"

# Response: 200
{"id":1,"brand":"Honda","model":"Hornet","collor":"Red","licensePlate":"CCC 1212","type":"Motorcycle","createdAt":"2023-06-26T04:44:57.155Z","updatedAt":"2023-06-26T04:44:57.155Z"}
```

* Update one vehicle.

```bash
# Method: PATCH /vehicle/{id}
$ curl -X PATCH http://localhost:3000/vehicle/1 -d '{"collor": "Silver"}' -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWRtaW5AcGFya2luZ2xvdC5jb20iLCJpYXQiOjE2ODc3NjEzOTl9.my4MLXefPrCHYhkjGEtIcpcyKzbgKoEEk3UJ9vu5_UM"

# Response: 200
{"id":1,"brand":"Honda","model":"Hornet","collor":"Silver","licensePlate":"CCC 1212","type":"Motorcycle","createdAt":"2023-06-26T04:44:57.155Z","updatedAt":"2023-06-26T04:44:57.155Z"}
```

* Delete one vehicle.

```bash
# Method: DELETE /vehicle/{id}
$ curl -X DELETE http://localhost:3000/vehicle/1 -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWRtaW5AcGFya2luZ2xvdC5jb20iLCJpYXQiOjE2ODc3NjEzOTl9.my4MLXefPrCHYhkjGEtIcpcyKzbgKoEEk3UJ9vu5_UM"

# Response: 200
true
```

### Parking Lot <a name="parking-lot"></a>

* Create a new parking lot.

```bash
# Method: POST /parking-lot
$ curl -X POST http://localhost:3000/parking-lot -d '{"name": "China Town Parking", "document": "00.000.000/0000-00", "address": "Rua das Casas, 42, Centro - Rio de Janeiro", "phone": "2190009090", "motorcycleCapacity": 10, "carCapacity": 20}' -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWRtaW5AcGFya2luZ2xvdC5jb20iLCJpYXQiOjE2ODc3NjEzOTl9.my4MLXefPrCHYhkjGEtIcpcyKzbgKoEEk3UJ9vu5_UM"

# Response: 201
{"id":1,"name":"China Town Parking","document":"00.000.000/0000-00","address":"Rua das Casas, 42, Centro - Rio de Janeiro","phone":"2190009090","motorcycleCapacity":10,"carCapacity":20,"createdAt":"2023-06-26T07:16:15.767Z","updatedAt":"2023-06-26T07:16:15.767Z"}
```

* Find all parking lots.

```bash
# Method: GET /parking-lot
$ curl -X GET http://localhost:3000/parking-lot -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWRtaW5AcGFya2luZ2xvdC5jb20iLCJpYXQiOjE2ODc3NjEzOTl9.my4MLXefPrCHYhkjGEtIcpcyKzbgKoEEk3UJ9vu5_UM"

# Response: 200
[{"id":1,"name":"China Town Parking","document":"123456789/4564","address":"Endereco","phone":"11989898989","motorcycleCapacity":15,"carCapacity":10,"createdAt":"2023-06-26T05:25:31.417Z","updatedAt":"2023-06-26T05:25:31.417Z"}]
```

* Find one parking lot.

```bash
# Method: GET /parking-lot/{id}
$ curl -X GET http://localhost:3000/parking-lot/1 -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWRtaW5AcGFya2luZ2xvdC5jb20iLCJpYXQiOjE2ODc3NjEzOTl9.my4MLXefPrCHYhkjGEtIcpcyKzbgKoEEk3UJ9vu5_UM"

# Response: 200
{"id":1,"name":"China Town Parking","document":"123456789/4564","address":"Endereco","phone":"11989898989","motorcycleCapacity":15,"carCapacity":10,"createdAt":"2023-06-26T05:25:31.417Z","updatedAt":"2023-06-26T05:25:31.417Z"}
```

* Update one parking lot.

```bash
# Method: PATCH /parking-lot/{id}
$ curl -X PATCH http://localhost:3000/parking-lot/1 -d '{"motorcycleCapacity": 15, "carCapacity": 25}' -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWRtaW5AcGFya2luZ2xvdC5jb20iLCJpYXQiOjE2ODc3NjEzOTl9.my4MLXefPrCHYhkjGEtIcpcyKzbgKoEEk3UJ9vu5_UM"

# Response: 200
{"id":1,"name":"China Town Parking","document":"123456789/4564","address":"Endereco","phone":"11989898989","motorcycleCapacity":15,"carCapacity":25,"createdAt":"2023-06-26T05:25:31.417Z","updatedAt":"2023-06-26T05:25:31.417Z"}
```

* Delete one parking lot.

```bash
# Method: DELETE /parking-lot/{id}
$ curl -X DELETE http://localhost:3000/parking-lot/1 -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWRtaW5AcGFya2luZ2xvdC5jb20iLCJpYXQiOjE2ODc3NjEzOTl9.my4MLXefPrCHYhkjGEtIcpcyKzbgKoEEk3UJ9vu5_UM"

# Response: 200
true
```

### Parking Lot entrances and exits <a name="parking-lot-in-out"></a>

* Create a new parking lot vehicle entrance/exit.

```bash
# Method: POST /parking-lot-in-out
$ curl -X POST http://localhost:3000/parking-lot-in-out -d '{"parkingLotId": 1, "vehicleId": 1, "vehicleIn": "2023-06-25 00:00:00"}' -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWRtaW5AcGFya2luZ2xvdC5jb20iLCJpYXQiOjE2ODc3NjEzOTl9.my4MLXefPrCHYhkjGEtIcpcyKzbgKoEEk3UJ9vu5_UM"

# Response: 201
{"id":1,"parkingLotId":1,"vehicleId":1,"vehicleIn":"2023-06-25 00:00:00","vehicleOut":null,"createdAt":"2023-06-26T07:31:07.358Z","updatedAt":"2023-06-26T07:31:07.358Z"}
```

* Find all parking lot vehicles entrances and exits.

```bash
# Method: GET /parking-lot-in-out
$ curl -X GET http://localhost:3000/parking-lot-in-out -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWRtaW5AcGFya2luZ2xvdC5jb20iLCJpYXQiOjE2ODc3NjEzOTl9.my4MLXefPrCHYhkjGEtIcpcyKzbgKoEEk3UJ9vu5_UM"

# Response: 200
[{"id":1,"parkingLotId":1,"vehicleId":1,"vehicleIn":"2023-06-25 00:00:00","vehicleOut":null,"createdAt":"2023-06-26T07:31:07.358Z","updatedAt":"2023-06-26T07:31:07.358Z"}]
```

* Find one parking lot entrance/exit.

```bash
# Method: GET /parking-lot-in-out/{id}
$ curl -X GET http://localhost:3000/parking-lot-in-out/2 -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWRtaW5AcGFya2luZ2xvdC5jb20iLCJpYXQiOjE2ODc3NjEzOTl9.my4MLXefPrCHYhkjGEtIcpcyKzbgKoEEk3UJ9vu5_UM"

# Response: 200
{"id":1,"parkingLotId":1,"vehicleId":1,"vehicleIn":"2023-06-25 00:00:00","vehicleOut":null,"createdAt":"2023-06-26T07:31:07.358Z","updatedAt":"2023-06-26T07:31:07.358Z"}
```

* Update one parking lot entrance/exit.

```bash
# Method: PATCH /parking-lot-in-out/{id}
$ curl -X PATCH http://localhost:3000/parking-lot-in-out/1 -d '{"vehicleOut": "2023-06-25 01:15:00"}' -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWRtaW5AcGFya2luZ2xvdC5jb20iLCJpYXQiOjE2ODc3NjEzOTl9.my4MLXefPrCHYhkjGEtIcpcyKzbgKoEEk3UJ9vu5_UM"

# Response: 200
{"id":1,"parkingLotId":1,"vehicleId":1,"vehicleIn":"2023-06-20 00:00:00","vehicleOut":"2023-06-25 01:15:00","createdAt":"2023-06-26T07:30:52.413Z","updatedAt":"2023-06-26T07:30:52.413Z"}
```

* Delete one parking lot entrance/exit.

```bash
# Method: DELETE /parking-lot-in-out/{id}
$ curl -X DELETE http://localhost:3000/parking-lot-in-out/1 -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWRtaW5AcGFya2luZ2xvdC5jb20iLCJpYXQiOjE2ODc3NjEzOTl9.my4MLXefPrCHYhkjGEtIcpcyKzbgKoEEk3UJ9vu5_UM"

# Response: 200
true
```

## Test <a name="tests"></a>

```bash
# Run unit tests.
$ yarn test

# Run test coverage.
$ yarn test:cov
