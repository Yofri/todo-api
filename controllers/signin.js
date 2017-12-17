import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import Users from '../models/users'

module.exports = async (req, res) => {
  try {
    const body = {email: req.body.email}
    const user = await Users.find(body)

    if (!bcrypt.compareSync(req.body.password, user[0].password)) {
      res.status(400).send({
        message: 'Wrong username / password'
      })
    }

    const payload = {
      id: user[0]._id,
      email: req.body.email
    }

    jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
      if (err) res.status(500).send(err)
      res.status(200).send({user, token})
    })
  } catch (err) {
    res.status(500).send(err)
  }
}