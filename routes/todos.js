import express from 'express'
import {create, lists, update, remove} from '../controllers/todos'
import authenticate from '../middlewares/middlewares'

const router = express.Router()
module.exports = router
  .post('/', /* authenticate, */ create)
  .get('/', /* authenticate, */ lists)
  .put('/:id', /* authenticate, */ update)
  .delete('/:id', /* authenticate, */ remove)