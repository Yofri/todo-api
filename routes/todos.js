import express from 'express'
import {create, lists, update, remove} from '../controllers/todos'
import {authenticated, authorized} from '../middlewares/middlewares'

const router = express.Router()
module.exports = router
  .post('/', authenticated, create)
  .get('/', authenticated, lists)
  .put('/:id', authenticated, update)
  .delete('/:id', authenticated, remove)