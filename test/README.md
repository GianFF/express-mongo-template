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