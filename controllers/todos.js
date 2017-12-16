import Todo from '../models/todos'
import _ from 'lodash'

/*
 * @endpoint /api/todos
 * @return json
 */
const create = async (req, res) => {
  try {
    console.log(req.body)
    const todo = await Todo.create(req.body)
    res.status(200).send(todo)
  } catch (err) {
    res.status(500).send(err)
  }
}

/*
 * @endpoint /api/todos
 * @return json
 */
const lists = async (req, res) => {
  try {
    const todos = await Todo.find()
    res.status(200).send(todos)
  } catch (err) {
    res.status(500).send(err)
  }
}

/*
 * @endpoint /api/todos
 * @return json
 */
const find = async (req, res) => {
  try {
    const todo = await Todo.find({_id: req.params.id})
    res.status(200).send(todo)
  } catch (err) {
    res.status(500).send(err)
  }
}

/*
 * @endpoint /api/todos
 * @return json
 */
const update = async (req, res) => {
  try {
    const todo = await Todo.update({_id: req.params.id}, req.body)
    res.status(200).send(todo)
  } catch (err) {
    res.status(500).send(err)
  }
}

const remove = async (req, res) => {
  try {
    const todo = await Todo.remove({_id: req.params.id})
    res.status(200).send(todo)
  } catch (err) {
    res.status(500).send(err)
  }
}

module.exports = { create, lists, find, update, remove}