const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {User} = require('../models')

const createUser = async (req, res) => {
  try {
    const isRegistered = await User.findOne({email: req.body.email})
    if (isRegistered) return res.status(401).send({
      msg: 'Email already registered'
    })

    req.body.password = await bcrypt.hash(req.body.password, 8)
    const user = await User.create(req.body)
    const token = jwt.sign({
      id: user._id,
      email: user.email
    }, process.env.JWT_KEY)
    res.status(200).send({token})
  } catch (err) {
    res.status(400).send(err)
  }
}

const login = async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email})
    if (!user) return res.status(401).send({
      msg: 'Email not found.'
    })

    const valid = await bcrypt.compare(req.body.password, user.password)
    if (!valid) return res.status(401).send({
      msg: 'Wrong password.'
    })

    const token = jwt.sign({
      id: user._id,
      email: user.email
    }, process.env.JWT_KEY)
    res.status(200).send({token})
  } catch (err) {
    res.status(400).send(err)
  }
}

module.exports = {createUser, login}