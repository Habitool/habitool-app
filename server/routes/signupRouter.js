const express = require('express');
const path = require('path');

const signupController = require('../controllers/signupController.js');

const signupRouter = express.Router();
// host:5000/signup
signupRouter.get(
  '/',
  (req, res) => (
    res
      .status(200)
      .sendFile(path.join(__dirname, '../../dist/index.html'))
  )
);

signupRouter.post(
  '/',
  signupController.addUser,
  (req, res) => (
    res.status(200).json({ result: 'pass' })
  )
);

module.exports = signupRouter;
