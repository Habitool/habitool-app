// const db = require("../models/dbModel.js");

// const cookieController = {};

// cookieController.setCookie = async (req, res, next) => {
//   // res.locals = {username : 'rabbit'}
//   const searchQuery = "SELECT cookie FROM users where username = $1";
//   const searchParams = [res.locals.username];
//   let rows;
//   try {
//     { rows } = await db.query(searchQuery, searchParams);
//   } catch (e) {
//     return next({err: 'err with searching db for cookie: ' + e });
//   }

// }

// module.exports = cookieController;
