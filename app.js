import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'

import users from './routes/users'
import todos from './routes/todos'

mongoose.connect('mongodb://localhost/todo', {useMongoClient: true})
mongoose.Promise = global.Promise
dotenv.config()

const app = express()
const db = mongoose.connection
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/users', users)
app.use('/todos', todos)

db.on('error', () => console.log('Error connecting to database'))
db.once('open', () => console.log('Connected to database'))
app.listen(port , () => console.log(`Express listening on port ${port}`))