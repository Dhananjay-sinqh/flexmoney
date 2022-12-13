// imports
const mongoose = require("mongoose");
const {
  MONGO_DATABASE,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_USER,
  MONGO_URL,
} = require("../config");

const username = encodeURIComponent(MONGO_USER);
const password = encodeURIComponent(MONGO_PASSWORD);
const database = encodeURIComponent(MONGO_DATABASE);
const port = encodeURIComponent(MONGO_PORT);
const url = encodeURIComponent(MONGO_URL);
const authSource = encodeURIComponent("admin");
const uri = `mongodb://${username}:${password}@${url}:${port}/${database}?authSource=${authSource}`;

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("🚀 Connected to database 🚀");
  } catch (error) {
    throw error;
  }
};

module.exports = {
  connect,
};
