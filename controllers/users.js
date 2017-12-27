import User from '../models/users'
import bcrypt from 'bcryptjs'

const create = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8)
    const user = await User.create(req.body)
    res.status(200).send(user)
  } catch (err) {
    res.status(500).send(err)
  }
}

const lists = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).send(users)
  } catch (err) {
    res.status(500).send(err)
  }
}

const update = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8)
    const user = await User.update({_id: req.params.id}, req.body)
    res.status(200).send(user)
  } catch (err) {
    res.status(500).send(err)
  }
}

const remove = async (req, res) => {
  try {
    const user = await User.remove({_id: req.params.id})
    res.status(200).send(user)
  } catch (err) {
    res.status(500).send(err)
  }
}

module.exports = {create, lists, update, remove}