const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers.token
  if (!token) {
    res.status(401).send({msg: 'Unauthenticated'})
  } else {
    req.user = jwt.verify(token, process.env.JWT_KEY)
    next()
  }
}