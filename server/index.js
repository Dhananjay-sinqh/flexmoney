// imports
const express = require("express");
const cors = require("cors");
const { indexRouter } = require("./routes/index.route");
const { PORT } = require("./config");
const { connect } = require("./database");
const { userRouter } = require("./routes/user.route");
const morgan = require("morgan");

const main = async () => {
  try {
    // connect to database
    await connect();

    // create express app
    const app = express();

    // middleware
    app.use(morgan("combined"));
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // routes
    app.use("/users", userRouter);
    app.use("/", indexRouter);

    // start server
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT} 🚀`);
    });
  } catch (error) {
    console.error(error);
  }
};

main();
