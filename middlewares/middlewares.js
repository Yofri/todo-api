import jwt from 'jsonwebtoken'

module.exports = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) res.status(500).send(err)
    else {
      req.decoded = decoded
      next()
    }
  })
}