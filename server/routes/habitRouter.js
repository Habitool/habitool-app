const express = require("express");

const habitController = require("../controllers/habitController.js");

const habitRouter = express.Router();

//localhost:5000/habit/addHabit
//localhost:5000/habit/get

habitRouter.post("/addHabit", habitController.addHabit, (req, res) => {
  return res.status(200).json({ updatedDoc: res.locals.updatedDoc });
});

module.exports = habitRouter;
