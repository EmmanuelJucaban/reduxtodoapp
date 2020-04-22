const router = require('express').Router();
const todoController = require('../../../controllers/todoController');

router.route('/')
  .get(todoController.getTodos);

module.exports = router;
