const { indexController } = require("../controllers/index.controller");
const indexRouter = require("express").Router();

// routes
indexRouter.get("/", indexController);

module.exports = { indexRouter };
