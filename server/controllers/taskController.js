const db = require("../models/mongooseModel.js");

const taskController = {};

taskController.addTask = async (req, res, next) => {
  // req.body = {email, habit, task, description, goalNum, isWeekly, startDate, endDate }
  const {
    email,
    habit,
    task,
    description,
    goalNum,
    isWeekly,
    startDate,
    endDate,
  } = req.body;
  // req.cookies
  // check if cookie matches
  const cookieValue = req.cookies.SSID;
  // console.log(cookieValue);
  const user = await db.User.findOne({ email });
  // console.log("user found from db", user);
  if (user.cookie !== cookieValue) return res.redirect("/");
  // check if name and start date
  const { habit: dbHabitRows } = await db.User.findOne({
    email,
    "habit.name": habit,
    cookie: cookieValue,
  });
  // habit name is hiking, task name is climbing
  // habit -> array
  // search for the object that has the name that is equal to our habit

  // [1,3,5,7,9] -> console.log(arr.some( (el) => if (el %2 === 0) return true ) ) -> false
  const alreadyExists = dbHabitRows.some((el) => {
    if (el.name === habit) {
      const result = el.tasks.some((innerEl) => {
        if (innerEl.name === task && innerEl.startDate === startDate)
          return true;
      });
      if (result) return true;
    }
  });
  console.log(alreadyExists);

  if (alreadyExists)
    return next({
      err: "task already exists for that habit for user: " + email,
    });
  try {
    const updatedDoc = await db.User.findOneAndUpdate(
      {
        email,
        cookie: cookieValue,
        "habit.name": habit,
      },
      {
        $push: {
          "habit.$[elem].tasks": {
            name: task,
            email,
            description,
            progress: 0,
            goalNum,
            isWeekly,
            startDate,
            endDate,
            history: [],
          },
        },
      },
      {
        arrayFilters: [{ "elem.name": habit }],
        new: true,
      }
    );
    console.log("update doc ", updatedDoc);
    res.locals.updatedDoc = updatedDoc;
    // await db.User.create(
    //   {
    //     name: task,
    //     email,
    //     description,
    //     progress: 0,
    //     goalNum,
    //     isWeekly,
    //     startDate,
    //     endDate,
    //   },
    //   (err, task) => {
    //     console.log(task);
    //     res.locals.taskid = task._id;
    //     console.log(res.locals.taskid);
    //   }
    // );
    // console.log(res.locals.taskid);
  } catch (e) {
    return next({ err: "error with creating task: " + e });
  }
  // const arr = [];
  // const daysInMonth = {
  //   1: 31,
  //   2: 28,
  //   3: 31,
  //   4: 30,
  //   5: 31,
  //   6: 30,
  //   7: 31,
  //   8: 31,
  //   9: 30,
  //   10: 31,
  //   11: 30,
  //   12: 31,
  // };
  // const d = await db.User.find({ "habit._id": "60c649e872645715dbbccc73" });
  // console.log(d);
  // if (isWeekly) {
  //   const splitStart = startDate.split("/").map((el) => parseInt(el));
  //   const splitEnd = endDate.split("/").map((el) => parseInt(el));
  //   while (splitStart[0] <= splitEnd[0]) {
  //     if (splitStart[0] === splitEnd[0] && splitStart[1] === splitEnd[1]) break;
  //     if (splitStart[1] === daysInMonth[splitStart[0]]) {
  //       splitStart[0]++;
  //       splitStart[1] = 1;
  //     } else {
  //       splitStart[1]++;
  //     }
  //     arr.push({
  //       user: user._id,
  //       habit,
  //       "history.date": "" + splitStart[0] + "/" + splitStart[1],
  //     });
  //   }
  //   console.log(arr);
  //   // db.User.updateMany({email, 'habit.name': habit}, {$push: {'habit.history': {$each: }} })
  //   await db.History.updateMany([...arr], {
  //     $push: { "history.task": { taskid: res.locals.taskid } },
  //   });
  // }
  return next();
};

taskController.removeTask = async (req, res, next) => {
  // req.body = {email, habit, task}
  // req.cookies
  const { email, habit, task } = req.body;
  const cookieValue = req.cookies.SSID;
  // check if cookie matches cookie in db
  const user = await db.User.findOne({ email });
  if (user.cookie !== cookieValue) return res.redirect("/");
  try {
    const updatedDoc = await db.User.findOneAndUpdate(
      { email },
      {
        $pull: { "habit.$[elem].tasks": { name: task } },
      },
      {
        arrayFilters: [{ "elem.name": habit }],
        new: true,
      }
    );
    console.log("\n new doc", updatedDoc);
    res.locals.updatedDoc = updatedDoc;
    return next();
  } catch (e) {
    return next({ err: "error with removing task: " + e });
  }
};

taskController.editTask = async (req, res, next) => {
  // req.body = { email, habit, newName, newDescription, newTotal, newStartDate, newEndDate}
  const {
    email,
    habit,
    task,
    newName,
    newDescription,
    newGoalNum,
    newStartDate,
    newEndDate,
  } = req.body;
  const cookieValue = req.cookies.SSID;

  // check if cookie matches cookie in db
  const user = await db.User.findOne({ email });
  if (user.cookie !== cookieValue) return res.redirect("/");

  const arr = [newName, newDescription, newGoalNum, newStartDate, newEndDate];
  const arr2 = ["name", "description", "goalNum", "startDate", "endDate"];

  const changes = {};
  arr.forEach((el, i) => {
    if (el) {
      Object.assign(changes, {
        ["habit.$[outter].tasks.$[inner]" + arr2[i]]: el,
      });
    }
  });
  console.log(changes);
  try {
    const updatedDoc = await db.User.findOneAndUpdate(
      { email },
      { "habit.$[outter].tasks.$[inner].name": newName },
      {
        arrayFilters: [{ "outter.name": habit }, { "inner.name": task }],
        new: true,
      }
    );
    console.log(updatedDoc);
    res.locals.updatedDoc = updatedDoc;
    return next();
  } catch (e) {
    return next({ err: "err with editing habit: " + e });
  }
};

module.exports = taskController;
