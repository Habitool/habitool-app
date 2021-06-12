const express = require("express");
const path = require("path");

const signupController = require("../controllers/signupController.js");

const signupRouter = express.Router();
// host:5000/signup
signupRouter.post("/", signupController.addUser, (req, res) => {
  console.log("sending response");
  res.status(200).json({ username: res.locals.username });
});

module.exports = signupRouter;
