const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://db:db123@cluster0.spklt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// URI for local machine
// const MONGO_URI = 'mongodb://localhost:27017/habitool';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'habitool',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

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
