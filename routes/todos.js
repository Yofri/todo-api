import express from 'express'
import {create, lists} from '../controllers/todos'

const router = express.Router()
module.exports = router
  .post('/', create)
  .get('/', lists)