require('dotenv').config();

module.exports = {
  DB_URL: process.env.DB_URL,
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
};
