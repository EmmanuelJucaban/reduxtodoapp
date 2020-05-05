const router = require('express').Router();
const todoController = require('../../../controllers/todoController');

const { requireAuth } = require('../../../middlewares/authMiddlewares');


router.route('/')
  .get(requireAuth, todoController.getTodos)
  .post(requireAuth, todoController.addTodo);

router.route('/:id')
  .get(todoController.getTodoById)
  .put(todoController.updateTodoById)
  .delete(todoController.deleteTodoById);

module.exports = router;
