// imports
const mongoose = require("mongoose");

// schema for the user
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
    validate: {
      validator: (v) => {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/.test(v);
      },
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  age: {
    type: Number,
    min: 18,
    max: 65,
    required: true,
  },
  payments: {
    type: [
      {
        month: {
          type: Number,
          min: 1,
          max: 12,
          required: true,
        },
        year: {
          type: Number,
          min: 2021,
          max: 2050,
          required: true,
        },
        batch: {
          type: String,
          required: true,
          enum: [
            "6:00 AM - 7:00 AM",
            "7:00 AM - 8:00 AM",
            "8:00 AM - 9:00 AM",
            "5:00 PM - 6:00 PM",
          ],
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    default: [],
  },
});

// model for the user
const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
