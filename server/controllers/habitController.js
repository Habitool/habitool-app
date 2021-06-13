const db = require("../models/mongooseModel.js");

const habitController = {};

habitController.addHabit = async (req, res, next) => {
  // req.body -> {email: dasfjlk, habit: 'fdas', description: ''}
  // req.cookies = {ssid: 'fdsjalk'}
  const { email, habit, description, total, startDate, endDate } = req.body;
  console.log(req.cookies);
  const cookieValue = req.cookies.SSID;
  console.log(cookieValue);
  // check if cookie matches cookie in db
  const user = await db.User.findOne({ email });
  console.log("user found from db", user);
  if (user.cookie !== cookieValue) return res.redirect("/");
  // check if the habit is already there for the user
  const inDB = await db.User.findOne({ email, "habit.name": habit });
  console.log("if already in db ", inDB);
  if (inDB) return next({ err: "habit is already in the db for that user" });
  // insert the habit into db if found
  try {
    const updatedDoc = await db.User.findOneAndUpdate(
      { email },
      {
        $push: {
          habit: {
            name: habit,
            streak: 0,
            progress: 0,
            total,
            description,
            startDate,
            endDate,
            history: [],
          },
        },
      },
      {
        returnNewDocument: true,
      }
    );
    res.locals.updatedDoc = updatedDoc;
  } catch (e) {
    return next({ err: "error with updating the habit: " + e });
  }
  return next();
};

// habitController.addHabit = async (req, res, next) => {
//   // req.body -> {username: dasfjlk, habit: 'fdas', description: ''}
//   // req.cookies = {ssid: 'fdsjalk'}
//   const { username, habit, description } = req.body;
//   console.log(req.cookies);
//   const cookieValue = req.cookies.SSID;
//   console.log(cookieValue);
//   const searchCookieQuery = "SELECT cookie FROM users where username = $1";
//   const searchCookieParams = [username];
//   try {
//     const { rows } = await db.query(searchCookieQuery, searchCookieParams);
//     if (rows.length && rows[0].cookie === cookieValue) {
//       console.log("cookie matches");
//       const insertHabitQuery = "INSERT INTO habit(name) VALUES($1)";
//       const insertHabitParams = [habit];

//       try {
//         await db.query(insertHabitQuery, insertHabitParams);
//         console.log("finished insert into habit table");
//       } catch (e) {
//         return next({
//           err: "error with add habit at inserting into habit table: " + e,
//         });
//       }
//       const insertUserHabitQuery =
//         "INSERT INTO user_habit(user_id, habit_id, description) VALUES( (SELECT id FROM users WHERE username = $1), (SELECT id FROM habit WHERE habit = $2), $3 )";
//       const insertUserHabitParams = [username, habit, description];

//       try {
//         await db.query(insertUserHabitQuery, insertUserHabitParams);
//         console.log("finished insert into user_habit table");
//       } catch (e) {
//         return next({
//           err: "error with add habit at inserting into user_habit table: " + e,
//         });
//       }
//     } else {
//       return res.redirect("/");
//     }
//     return next();
//   } catch (e) {
//     return next({
//       err: "error with add habit at grabing cookie value from db: " + e,
//     });
//   }
// };

module.exports = habitController;
