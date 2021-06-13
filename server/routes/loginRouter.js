const express = require("express");

const loginController = require("../controllers/loginController.js");

const loginRouter = express.Router();

//localhost:5000/login/
loginRouter.get("/", (req, res) => {
  return res
    .status(200)
    .sendFile(path.join(__dirname, "../../dist/index.html"));
});

loginRouter.post("/", loginController.verifyUser, (req, res) => {
  return res.status(200).json({ result: "successful login" });
});

module.exports = loginRouter;
