import Todo from '../models/todos'

const create = async (req, res) => {
  try {
    const todo = await Todo.create(req.body)
    res.status(200).send(todo)
  } catch (err) {
    res.status(500).send(err)
  }
}

const lists = async (req, res) => {
  try {
    const todos = await Todo.find({uid: req.user.id})
    res.status(200).send(todos)
  } catch (err) {
    res.status(500).send(err)
  }
}

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

export {create, lists, update, remove}