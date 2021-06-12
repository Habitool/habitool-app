const express = require("express");

const loginController = require("../controllers/loginController.js");

const loginRouter = express.Router();

//localhost:5000/login

loginRouter.post("/", loginController.verifyUser, (req, res) => {
  return res.status(200).json({ username: res.locals.username });
});

module.exports = loginRouter;
