import bcrypt from 'bcryptjs'
import Users from '../models/users'

module.exports = async (req, res) => {
  try {
    const body = {
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    }
    const user = await Users.create(body)
    res.status(200).send(user)
  } catch (err) {
    res.status(500).send(err)
  }
}