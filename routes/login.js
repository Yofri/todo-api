import express from 'express'
import login from '../controllers/login'

const router = express.Router()
module.exports = router
  .post('/', login)