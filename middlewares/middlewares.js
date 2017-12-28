import jwt from 'jsonwebtoken'

const authenticated = (req, res, next) => {
  const token = req.headers.token

  if (!token) {
    res.status(401).send({msg: 'Unauthenticated'})
  } else {
    const decoded = jwt.verify(token, process.env.JWT_KEY)
    req.user = decoded
    next()
  }
}

const authorized = (req, res, next) => {
  const token = req.headers.token
  const decoded = jwt.verify(token, process.env.JWT_KEY)

  if (decoded.role === 'admin') next()
  else res.status(401).send({msg: 'Unauthorized'})
}

export {authenticated, authorized}