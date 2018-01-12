const router = require('express').Router()
const {createTodo, allTodos, removeTodo} = require('../controllers')
const {isLogin, encode, parser, logger} = require('../middlewares')

module.exports = router
  .post('/', isLogin, encode, parser, logger, createTodo)
  .get('/', isLogin, encode, logger, allTodos)
  .delete('/:id', isLogin, logger, removeTodo)