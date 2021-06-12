const express = require("express");

const habitController = require("../controllers/habitController.js");

const habitRouter = express.Router();

//localhost:5000/login

habitRouter.post("/", (req, res) => {
  return;
});

module.exports = habitRouter;
