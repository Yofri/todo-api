const router = require('express').Router()
const {createUser, login} = require('../controllers')
const {isLogin, encode, parser, logger} = require('../middlewares')

module.exports = router
  .post('/register', encode, parser, logger, createUser)
  .post('/login', encode, parser, logger, login)