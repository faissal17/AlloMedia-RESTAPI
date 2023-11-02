const checkClientMiddleware = require("../../middlewares/clientMiddleware");
const clientController = require("../../controllers/client/clientController");

const express = require("express");
const clientRouter = express.Router();

clientRouter.get("/client", checkClientMiddleware, clientController.getClient);

module.exports = clientRouter;
