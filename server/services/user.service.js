// imports
const { User } = require("../models/user.model");

// create a user
const createUser = async ({ name, email, age }) => {
  const user = new User({
    name,
    email,
    age,
  });

  await user.save();
  return user;
};

// create a payment
const createPayment = async ({ user, month, year, batch }) => {
  // add the payment
  user.payments.push({ month, year, batch });

  // save the user
  const newUser = await user.save();

  return newUser;
};

// get user payments
const getUserPayments = async ({ email }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  return user.payments;
};

module.exports = {
  createUser,
  createPayment,
  getUserPayments,
};
