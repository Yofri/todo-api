import express from 'express'
import signin from '../controllers/signin'

const router = express.Router()
module.exports = router
  .post('/', signin)