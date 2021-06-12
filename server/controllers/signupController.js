const db = require("../models/dbModel.js");
const bcrypt = require("bcryptjs");

const signupController = {};

signupController.addUser = async (req, res, next) => {
  // req.body = { username: 'rabbit', password: 'carrot'}
  const { username, password } = req.body;

  const searchQuery = "SELECT username FROM users where username = $1";
  const searchParams = [username];
  try {
    const { rowCount } = await db.query(searchQuery, searchParams);
    console.log("number of matches in db", rowCount);
    if (rowCount)
      return next({ err: "error with username found already in db" });
  } catch (e) {
    return next({ err: "error with searching username in db: " + e });
  }

  const hashedPass = await bcrypt.hash(password, 5);
  const cookie = username + " hello cookie";
  // insert into db
  const insertQuery =
    "INSERT INTO users (username, password, cookie) VALUES ($1, $2, $3)";
  const insertParams = [username, hashedPass, cookie];
  const createTableQuery = `CREATE TABLE ${username}_history(id SERIAL PRIMARY KEY, date varchar NOT NULL, habit_id int NOT NULL, task_id int NOT NULL, requirement int, completion int DEFAULT 0, isWeekly int DEFAULT 0)`;
  try {
    await db.query(insertQuery, insertParams);
    await db.query(createTableQuery);
  } catch (e) {
    // fill in error message
    return next({ err: "error with db query in addUser: " + e });
  }
  console.log("successfully signuped");
  res.locals.username = username;
  res.cookie("SSID", cookie);
  return next();
};

module.exports = signupController;
