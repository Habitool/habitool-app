const db = require("../models/mongooseModel.js");
const bcrypt = require("bcryptjs");

const signupController = {};

signupController.addUser = async (req, res, next) => {
  // req.body = { email: password: full_name:}
  const { email, password, fullName } = req.body;
  // []
  try {
    const results = await db.User.find({ email });
    if (results.length) return next({ err: "email has already been used" });
  } catch (e) {
    return next({ err: "error with searching db for email: " + e });
  }
  const hashedPass = await bcrypt.hash(password, 5);
  const cookie = await bcrypt.hash(fullName, 5);
  try {
    await db.User.create({
      email,
      password: hashedPass,
      fullName,
      cookie,
      habit: [],
    });
  } catch (e) {
    return next({ err: "error with inserting into user collection: " + e });
  }
  res.cookie("SSID", cookie);
  return next();
};

// signupController.addUser = async (req, res, next) => {
//   // req.body = { username: 'rabbit', password: 'carrot'}
//   const { username, password } = req.body;

//   const searchQuery = "SELECT username FROM users where username = $1";
//   const searchParams = [username];
//   try {
//     const { rowCount } = await db.query(searchQuery, searchParams);
//     console.log("number of matches in db", rowCount);
//     if (rowCount)
//       return next({ err: "error with username found already in db" });
//   } catch (e) {
//     return next({ err: "error with searching username in db: " + e });
//   }

//   const hashedPass = await bcrypt.hash(password, 5);
//   const cookie = username + " hello cookie";
//   // insert into db
//   const insertQuery =
//     "INSERT INTO users (username, password, cookie) VALUES ($1, $2, $3)";
//   const insertParams = [username, hashedPass, cookie];
//   const createTableQuery = `CREATE TABLE ${username}_history(id SERIAL PRIMARY KEY, date varchar NOT NULL, habit_id int NOT NULL, task_id int NOT NULL, description varchar, requirement int, completion int DEFAULT 0, isWeekly int DEFAULT 0, CONSTRAINT fk_habit FOREIGN KEY (habit_id) REFERENCES habit(id) ON DELETE cascade, CONSTRAINT fk_task FOREIGN KEY (task_id) REFERENCES task(id) ON DELETE cascade )`;
//   try {
//     await db.query(insertQuery, insertParams);
//     await db.query(createTableQuery);
//   } catch (e) {
//     // fill in error message
//     return next({ err: "error with db query in addUser: " + e });
//   }
//   console.log("successfully signuped");
//   res.locals.username = username;
//   res.cookie("SSID", cookie);
//   return next();
// };

module.exports = signupController;
