const router = require('express').Router();
const todoController = require('../../../controllers/todoController');

router.route('/')
  .get(todoController.getTodos)
  .post(todoController.addTodo);

router.route('/:id')
  .get(todoController.getTodoById)
  .put(todoController.updateTodoById)
  .delete(todoController.deleteTodoById);

module.exports = router;
