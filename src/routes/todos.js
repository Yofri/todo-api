const router = require('express').Router()
const {createTodo, allTodos, updateTodo, removeTodo} = require('../controllers')
const {isLogin, isAdmin, encode, parser, logger} = require('../middlewares')

module.exports = router
  .post('/', isLogin, encode, logger, createTodo)
  .get('/', isLogin, encode, logger, allTodos)
  .put('/:id', isLogin, encode, logger, updateTodo)
  .delete('/:id', isLogin, logger, removeTodo)