# Template repository

- [Template repository](#template-repository)
    - [What's this about?](#whats-this-about)
  - [Project setup](#project-setup)
    - [Local Setup](#local-setup)
    - [App setup with Docker](#app-setup-with-docker)
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

- `docker compose -f docker-compose.debug.yml --env-file .env-test up -d --wait --wait-timeout 60 --build`
- click on debug script on `package.json`

### App setup with Docker
* TEST: `docker compose --env-file .env-test up -d --wait --wait-timeout 60 --build`
* DEV: `docker compose --env-file .env-dev up -d --wait --wait-timeout 60 --build` (also used on CI)
* PROD: `docker compose up -d --wait --wait-timeout 60 --build` (.env file loaded by default)

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
