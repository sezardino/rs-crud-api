# CRUD API with Horizontal Scaling

## Description

This application implements a CRUD API for managing users, featuring horizontal scaling. Built with Node.js and TypeScript, it allows handling requests through clustering.

## Features

- **Create User:** POST /api/users
- **Get All Users:** GET /api/users
- **Get User by ID:** GET /api/users/{userId}
- **Update User:** PUT /api/users/{userId}
- **Delete User:** DELETE /api/users/{userId}

## Installation

1. **Clone the repository:**

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Running the Application

### Development Mode

To run the application in development mode, use:

```bash
npm run start:dev
```

### Production Mode

To run the application in production mode, execute:

```bash
npm run start:prod
```

You can add a note in the README about what will be displayed in the console when the application is running in horizontal scaling mode. Here's an updated section for your README:


### Horizontal Scaling

To start multiple instances of the application with load balancing, use:

```bash
npm run start:multi
```

When the application starts in horizontal scaling mode, the console will display messages indicating the ports on which the load balancer and worker instances are running. For example:

```
Primary process is running on port 4000
Worker 1 started on port 4001
Worker 2 started on port 4002
Worker 3 started on port 4003
...
```

The application will be accessible at `http://localhost:4000/api`, and requests will be distributed among workers listening on ports `4001`, `4002`, and so on.

## API Testing

The application includes a set of tests written with Jest. To run the tests, use:

```bash
npm test
```

## Example Requests

1. Get all users:

   ```bash
   curl http://localhost:3000/api/users
   ```

2. Create a new user:

   ```bash
   curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d '{"username": "JohnDoe", "age": 30, "hobbies": ["reading", "gaming"]}'
   ```

3. Get user by ID:

   ```bash
   curl http://localhost:3000/api/users/{userId}
   ```

4. Update user:

   ```bash
   curl -X PUT http://localhost:3000/api/users/{userId} -H "Content-Type: application/json" -d '{"username": "JaneDoe", "age": 25, "hobbies": ["music"]}'
   ```

5. Delete user:

   ```bash
   curl -X DELETE http://localhost:3000/api/users/{userId}
   ```
