import express from 'express'
import {create, lists, find, update, remove} from '../controllers/todos'

const router = express.Router()
module.exports = router
  .post('/', create)
  .get('/', lists)
  .get('/:id', find)
  .put('/:id', update)
  .delete('/:id', remove)