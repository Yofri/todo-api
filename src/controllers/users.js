const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {User} = require('../models')

const createUser = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8)
    const user = await User.create(req.body)
    res.status(200).send(user)
  } catch (err) {
    res.status(400).send(err)
  }
}

const login = async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email})
    if (!user) res.status(401).send({
      msg: 'Email not found.'
    })

    const valid = await bcrypt.compare(req.body.password, user.password)
    if (!valid) res.status(401).send({
      msg: 'Wrong password.'
    })

    const token = jwt.sign({
      id: user._id,
      email: user.email
    }, process.env.JWT_KEY)
    res.status(200).send({token})
  } catch (err) {
    res.status(500).send(err)
  }
}

const allUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).send(users)
  } catch (err) {
    res.status(400).send(err)
  }
}

const updateUser = async (req, res) => {
  try {
    const user = await User.findOne({_id: req.params.id})
    if (req.user.id === user._id.toString()) {
      if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 8)
      }
      const user = await User.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).send(user)
    } else {
      res.status(401).send({msg: 'Unauthorized'})
    }
  } catch (err) {
    res.status(400).send(err)
  }
}

const removeUser = async (req, res) => {
  try {
    const user = await User.findOne({_id: req.params.id})
    if (req.user.id === user._id.toString()) {
      const user = await User.findByIdAndRemove(req.params.id)
      res.status(200).send(user)
    } else {
      res.status(401).send({msg: 'Unauthorized'})
    }
  } catch (err) {
    res.status(400).send(err)
  }
}

module.exports = {createUser, login, allUsers, updateUser, removeUser}