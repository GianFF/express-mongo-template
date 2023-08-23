# Testing 

We follow the pattern Arrange-Act-Assert and try to TDD everything.


### API tests

This suite is designed to integrate all elements in the application while hitting the API endpoints.
It checks the integration between all elements is working as expected.

Services doing external requests will be supplied by their mock instances, thus that no request will be made to the outside application. 
An in memory mongo DB will be used instead of the productive one.


### Integration tests

Create a Postman API collection to test critical API endpoints.   
Add needed secrets on GitHub:
* POSTMAN_API_KEY
* POSTMAN_COLLECTION_ID


Example: [This suite lives in Postman](https://www.postman.com/edymberg/workspace/team-workspace/api/b32b9774-29f2-4ff8-a087-29360ebbd87b?action=share&creator=2930866). 
It's designed to run all tests using the real API and DB, but also all the real components hierarchy.   
It would be run on each commit by a Github Action using docker-compose to start the application and hit the API.

These are examples of Postman tests and the Github Action output:

<img width="982" alt="Postman tests output" src="https://github.com/GianFF/express-mongo-template/assets/11510367/0b4688dd-f518-4c73-bcc3-cd4f56ed1ae2">
<img width="745" alt="Unit Tests workflow" src="https://github.com/GianFF/express-mongo-template/assets/11510367/514de8cb-d54c-4b67-888b-a6f719074e6e">
