const { Schema, Model } = require('mongoose');

const TodoSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = new Model('Todo', TodoSchema);

module.exports = Todo;
