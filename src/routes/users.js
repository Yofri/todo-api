const router = require('express').Router()
const {createUser, login, allUsers, updateUser, removeUser} = require('../controllers')
const {isLogin, encode, parser, logger} = require('../middlewares')

module.exports = router
  .post('/register', encode, parser, logger, createUser)
  .post('/login', encode, parser, logger, login)
  .get('/', isLogin, logger, allUsers)
  .put('/:id', isLogin, encode, logger, updateUser)
  .delete('/:id', isLogin, logger, removeUser)