const clientMiddleware = require("../../middlewares/clientMiddleware");
const clientController = require("../../controllers/client/clientController");

const express = require("express");
const clientRouter = express.Router();

clientRouter.get("/me", clientController.getClient);

module.exports = clientRouter;
