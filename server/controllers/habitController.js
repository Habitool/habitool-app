const db = require("../models/dbModel.js");

const habitController = {};

habitController.addHabit = async (req, res, next) => {
  // req.body -> {username: dasfjlk, habit: 'fdas'}
  // req.cookies = {ssid: 'fdsjalk'}
  const { username, habit } = req.body;
  const cookieValue = req.cookies.SSID;
  const searchCookieQuery = "SELECT cookie FROM users where username = $1";
  const searchCookieParams = [username];
  try {
    const { rows } = await db.query(searchCookieQuery, searchCookieParams);
    if (rows.length && rows[0].cookie === cookieValue) {
      const insertHabitQuery = "INSERT INTO habit(name) VALUES($1)";
      const insertHabitParams = [habit];
      await db.query(insertHabitQuery, insertHabitParams);
      const insertUserHabitQuery =
        "INSERT INTO user_habit(user_id, habit_id) VALUES( (SELECT id FROM users WHERE username = $1), (SELECT id FROM habit WHERE habit = $2) )";
      const insertUserHabitParams = [username, habit];
    }
  } catch (e) {}
};

module.exports = habitController;
