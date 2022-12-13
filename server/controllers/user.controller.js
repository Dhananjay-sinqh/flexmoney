const { User } = require("../models/user.model");
const {
  createUser,
  createPayment,
  getUserPayments,
} = require("../services/user.service");

// create a user
const createUserController = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const user = await createUser({ name, email, age });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json(error?.message);
  }
};

// create a payment
const createPaymentController = async (req, res) => {
  try {
    const { email, month, year, batch } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    // check if the user has already paid for the month
    const payment = user.payments.find(
      (payment) => payment.month === month && payment.year === year
    );
    if (payment) {
      throw new Error("User has already paid for the month");
    }

    // check if the payment is not before the user was created
    const userCreatedMonth = user.createdAt.getMonth() + 1;
    const userCreatedYear = user.createdAt.getFullYear();
    const userCreatedAt = new Date(userCreatedYear, userCreatedMonth - 1);
    const paymentDate = new Date(year, month - 1);

    if (paymentDate < userCreatedAt) {
      throw new Error("Payment date cannot be before user creation date");
    }

    // create the payment
    const newUser = await createPayment({ user, month, year, batch });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(400).json(error?.message);
  }
};

// get user payments
const getUserPaymentsController = async (req, res) => {
  try {
    const { email } = req.body;
    const payments = await getUserPayments({ email });
    res.status(200).json(payments);
  } catch (error) {
    console.error(error);
    res.status(400).json(error?.message);
  }
};

module.exports = {
  createUserController,
  createPaymentController,
  getUserPaymentsController,
};
