import Todo from '../models/todos'
import mongoose from 'mongoose'
import _ from 'lodash'

const create = async (req, res) => {
  try {
    console.log(req.body)
    const todo = await Todo.create(req.body)
    res.status(200).send(todo)
  } catch (err) {
    res.status(500).send(err)
  }
}

const lists = async (req, res) => {
  try {
    const todos = await Todo.find()
    res.status(200).send(todos)
  } catch (err) {
    res.status(500).send(err)
  }
}

module.exports = {create, lists}