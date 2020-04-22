const { Schema, model } = require('mongoose');

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

const Todo = model('Todo', TodoSchema);

module.exports = Todo;
