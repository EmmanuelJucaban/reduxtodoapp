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
      return res.status.json({ error });
    }
  },
};
