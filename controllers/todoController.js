const { Todo } = require('../models');

module.exports = {
  getTodos: async (req, res) => {
    try {
      const todos = await Todo.find();
      if (!todos) {
        return res.json({ error: 'No todos found' });
      }
      return res.json(todos);
    } catch (error) {
      return res.status(403).json({ error });
    }
  },
  addTodo: async (req, res) => {
    const { text } = req.body;
    if (!text) {
      return res.status(403).json({ error: 'You must provide a text' });
    }
    try {
      const newTodo = await new Todo({ text }).save();
      return res.status(200).json(newTodo);
    } catch (error) {
      return res.status(403).json({ error: 'You must provide a name' });
    }
  },
  getTodoById: async (req, res) => {
    const { id } = req.params;
    try {
      const todo = await Todo.findById(id);
      if (!todo) {
        return res.status(404).json({ error: 'No todo found with that id'});
      }
      return res.json(todo);
    } catch (error) {
      return res.status(403).json({ error });
    }
  },
  deleteTodoById: async (req, res) => {
    const { id } = req.params;
    try {
      const todo = await Todo.findByIdAndDelete(id);
      if (!todo) {
        return res.status(404).json({ error: 'No todo found with that Id'});
      }
      return res.json({ success: true });
    } catch (error) {
      return res.status(403).json({ error });
    }
  },
  updateTodoById: async (req, res) => {
    const { id } = req.params;
    const { completed, text } = req.body;
    try {
      const todo = await Todo.findByIdAndUpdate(id,
        { completed, text },
        { new: true, useFindAndModify: false });
      if (!todo) {
        return res.status(404).json({ error: 'No todo found with that Id'});
      }
      return res.json(todo);
    } catch (error) {
      return res.status(403).json({ error });
    }
  },
};
