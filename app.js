import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import morgan from 'morgan'

import signup from './routes/signup'
import signin from './routes/signin'
import todos from './routes/todos'

mongoose.connect('mongodb://localhost/todo', {useMongoClient: true})
mongoose.Promise = global.Promise
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/api/signup', signup)
app.use('/api/signin', signin)
app.use('/api/todos', todos)

app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err)
});

app.listen(port , () => console.log(`Express listening on port ${port}`))