const mongoose = require('mongoose');
require('dotenv').config();

const Schema = mongoose.Schema;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'habitool',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));


const userSchema = new Schema({
  email: String,
  password: String,
  full_name: String,
  cookie: String,
  habit: [
    {
      name: String,
      description: String,
      progress: Number,
      total: Number,
      weekly: [Number],
      cadence: String,
      streak: Number,
      startDate: String,
      endDate: String,
      tasks: [
        {
          name: String,
          email: String,
          description: String,
          progress: Number,
          goalNum: Number,
          isWeekly: Boolean,
          startDate: String,
          endDate: String,
          history: [String],
        },
      ],
    },
  ],
});

const User = mongoose.model('User', userSchema);

// const taskSchema = new Schema({
//   name: String,
//   email: String,
//   description: String,
//   progress: Number,
//   goalNum: Number,
//   isWeekly: Boolean,
//   startDate: String,
//   endDate: String,
//   history: [String],
// });

// const Task = mongoose.model("Task", taskSchema);

// const historySchema = new Schema({
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: "user",
//   },
//   habit: String,
//   history: [
//     {
//       date: String,
//       tasks: [
//         {
//           taskid: {
//             type: Schema.Types.ObjectId,
//             ref: "task",
//           },
//         },
//       ],
//       completed: Boolean,
//     },
//   ],
// });

// const History = mongoose.model("History", historySchema);

// exports all the models in an object to be used in the controller
module.exports = {
  User,
  // Task,
  // History,
};

// mongorestore --uri="<YOUR_CONNECTION_STRING>"
