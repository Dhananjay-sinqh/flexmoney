const { config } = require("dotenv");

config();

const PORT = process.env.PORT || 8000;

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_PORT = process.env.MONGO_PORT;
const MONGO_DATABASE = process.env.MONGO_DATABASE;
const MONGO_URL = process.env.MONGO_URL;

module.exports = {
  PORT,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_DATABASE,
  MONGO_URL,
};
