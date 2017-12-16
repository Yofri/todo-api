import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import morgan from 'morgan'
import todos from './routes/todos'

mongoose.connect('mongodb://localhost/todo', {useMongoClient: true})
mongoose.Promise = global.Promise

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/api/todos', todos)

app.listen(3000 , () => console.log('Express listening on port 3000'))