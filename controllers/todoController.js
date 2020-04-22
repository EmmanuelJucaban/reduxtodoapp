const { Todo } = require('../models');

module.exports = {
  getTodos: async (req, res) => {
    try {
      const todos = await Todo.find();
      if (!todos) throw new Error('No todos found');
      res.json(todos);
    } catch (error) {
      res.status(403).json({ error });
    }
  },
};
