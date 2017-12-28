import User from '../models/users'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

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
    if (req.user.role === 'user') {
      const users = await User.find()
      res.status(200).send(users)
    } else {
      res.status(401).send({msg: 'Unauthorized'})
    }
  } catch (err) {
    res.status(500).send(err)
  }
}

const update = async (req, res) => {
  try {
    const user = await User.find({_id: req.params.id})
    if (req.user.id === user[0]._id.toString() || req.user.role === 'admin') {
      if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 8)
      }
      const user = await User.update({_id: req.params.id}, req.body)
      res.status(200).send(user)
    } else {
      res.status(401).send({msg: 'Unauthorized'})
    }
  } catch (err) {
    res.status(500).send(err)
  }
}

const remove = async (req, res) => {
  try {
    const user = await User.find({_id: req.params.id})
    if (req.user.id === user[0]._id.toString()) {
      const user = await User.remove({_id: req.params.id})
      res.status(200).send(user)
    } else {
      res.status(401).send({msg: 'Unauthorized'})
    }
  } catch (err) {
    res.status(500).send(err)
  }
}

const login = async (req, res) => {
  try {
    const user = await User.find({email: req.body.email})
    if (!user.length) res.status(401).send({
      msg: 'Email not found.'
    })

    const valid = await bcrypt.compare(req.body.password, user[0].password)
    if (!valid) res.status(401).send({
      msg: 'Wrong password.'
    })

    const payload = {
      id: user[0]._id,
      email: user[0].email,
      role: user[0].role
    }

    const token = jwt.sign(payload, process.env.JWT_KEY)
    res.status(200).send({token})
  } catch (err) {
    res.status(500).send(err)
  }
}

export {create, lists, update, remove, login}