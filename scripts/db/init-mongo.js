/* eslint-disable */

// Creates Data Base
console.log('\n------- Crating DB -------\n');
const db = db.getSiblingDB(`${process.env.MONGO_INITDB_ROOT_DATABASE}`);
console.log(`\n------- DB created -------\n`);

// Create User
console.log(`\n------- Creating User -------\n`);
const user = db.createUser(
  {
    user: `${process.env.MONGO_INITDB_ROOT_USERNAME}`,
    pwd:  `${process.env.MONGO_INITDB_ROOT_PASSWORD}`,
    roles: [ { role: "readWrite", db: process.env.MONGO_INITDB_ROOT_DATABASE } ]
  }
);
console.log(`\n------- User created ${JSON.stringify(user)} -------\n`);