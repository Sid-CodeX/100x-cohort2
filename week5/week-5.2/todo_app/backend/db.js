/*
* Todo {
  title: string,
  description: string,
  completed: boolean,
 }
*/

const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model('todo', todoSchema);
module.exports = {
  todo: todo,
};