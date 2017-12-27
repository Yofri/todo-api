import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../models/users'

module.exports = async (req, res) => {
  try {
    const user = await User.find({email: req.body.email})
    if (!user.length) res.status(401).send({
      message: 'Email not found.'
    })

    const valid = await bcrypt.compare(req.body.password, user[0].password)
    if (!valid) res.status(401).send({
      message: 'Wrong password.'
    })

    const payload = {
      id: user[0]._id,
      email: user[0].email
    }

    const token = await jwt.sign(payload, process.env.JWT_KEY)
    res.status(200).send({token})
  } catch (err) {
    res.status(500).send(err)
  }
}