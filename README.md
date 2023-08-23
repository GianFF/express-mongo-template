# Template repository

- [Template repository](#template-repository)
    - [What's this about?](#whats-this-about)
  - [Project setup](#project-setup)
    - [Local Setup](#local-setup)
    - [Docker Setup](#docker-setup)
  - [Architectural Decisions](#architectural-decisions)
  - [Testing](#testing)

---

### What's this about? 

**This is a template repository used to speed up backend APIs creation.**   
It uses MongoDB and In Memory MongoDB for testing purposes. Express for the API and Docker + Docker Compose to build the DB and the API. 
It also uses GitHub Actions for the CI/CD workflows.

--- 

## Project setup
- `cp .env-example .env`
- `nvm use`
- `npm ci`
- `npm run tests`

### Local Setup

You can startup the DB using a Docker image as follows:
* `docker build -f Dockerfile.mongoDB . -t exampleDB`
* `docker run --publish 27017:27017 exampleDB`  

And then just start the server:
* `npm run serve` 
* or run the debug script so you can add breakpoints in the code.

### Docker Setup
`docker compose up -d --wait --wait-timeout 60 --build`

## Architectural Decisions
Github Actions for CI/CD
- CD: each commit on main builds a new Docker image and push it to the Registry. Define following secrets on GitHub:
  * DOCKERHUB_USERNAME
  * DOCKERHUB_TOKEN
  * DOCKERHUB_REPO_NAME
- CI: each commit on every branch runs tests, linter, and also integration_tests using POSTMAN and docker-compose in the Github Action VM. Define following secrets on GitHub:
  * POSTMAN_API_KEY
  * POSTMAN_COLLECTION_ID
- main branch should be protected, restricting devs to merge a broken PR. Saving the CD workflow to build a broken image.

Code structure separated in layers
- API
- Services
- Repositories
- Domain

Technologies:
* Node JS with Express and vanilla Javascript to build the Client API.
* Testing with Jest.
* Eslint to keep code consistency.
* Github Actions for workflows
* Postman for API (integration) Testing
* Docker & docker-compose

## Testing
The intention is to have a high code coverage.  
Go to: [Testing REAMDE](https://github.com/GianFF/express-mongo-template/tree/main/test)
