const router = require('express').Router();
const todoController = require('../../../controllers/todoController');

router.route('/')
  .get(todoController.getTodos)
  .post(todoController.addTodo);

module.exports = router;
