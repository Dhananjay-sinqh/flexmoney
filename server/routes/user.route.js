// imports
const {
  createUserController,
  createPaymentController,
  getUserPaymentsController,
} = require("../controllers/user.controller");
const userRouter = require("express").Router();

// routes
userRouter.post("/createpayment", createPaymentController);
userRouter.post("/getuserpayments", getUserPaymentsController);
userRouter.post("/", createUserController);

module.exports = { userRouter };
