const express = require("express");
const routes = express.Router();

const PersonagemController = require("../controllers/PersonagensControllers");
const PersonagemMiddleware = require("../middlewares/PersonagemMiddlewares");

routes.get('/personagens', PersonagemController.getAll);
routes.get('/personagens/:id', PersongemMiddleware.getById);

module.exports = routes;