const express = require("express");
const livreurController = require("../../controllers/livreur/livreurController");

const livreurRouter = express.Router();

livreurRouter.get("/livreur", livreurController.getLivreur);

module.exports = livreurRouter;
