const {Todo} = require('../models')

const createTodo = async (req, res) => {
  try {
    req.body.uid = req.user.id
    const todo = await Todo.create(req.body)
    res.status(200).send(todo)
  } catch (err) {
    res.status(400).send(err)
  }
}

const allTodos = async (req, res) => {
  try {
    const todos = await Todo.find({uid: req.user.id})
    res.status(200).send(todos)
  } catch (err) {
    res.status(500).send(err)
  }
}

const removeTodo = async (req, res) => {
  try {
    const todo = await Todo.findOne({_id: req.params.id})
    if (req.user.id === todo.uid.toString()) {
      const todo = await Todo.findByIdAndRemove(req.params.id)
      res.status(200).send(todo)
    } else {
      res.status(401).send({msg: 'Unauthorized'})
    }
  } catch (err) {
    res.status(500).send(err)
  }
}

module.exports = {createTodo, allTodos, removeTodo}