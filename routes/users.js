import express from 'express'
import {create, lists, update, remove, login} from '../controllers/users'
import authenticated from '../middlewares/middlewares'

const router = express.Router()
export default router
  .post('/login', login)
  .post('/register', create)
  .get('/', authenticated, lists)
  .put('/:id', authenticated, update)
  .delete('/:id', authenticated, remove)