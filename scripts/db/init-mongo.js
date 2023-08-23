/* eslint-disable */

// TODO: get from env vars

// Creates Data Base
console.log('\n------- Crating DB -------\n');
const db = db.getSiblingDB('exampleDB');
console.log(`\n------- DB created -------\n`);

// Create User
console.log(`\n------- Creating User -------\n`);
const user = db.createUser(
  {
    user: 'user',
    pwd:  'pass',
    roles: [ { role: "readWrite", db: "exampleDB" } ]
  }
);
console.log(`\n------- User created ${JSON.stringify(user)} -------\n`);
