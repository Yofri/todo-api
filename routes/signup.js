import express from 'express'
import signup from '../controllers/signup'

const router = express.Router()
module.exports = router
  .post('/', signup)