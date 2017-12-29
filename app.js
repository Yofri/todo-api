import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'

import users from './routes/users'
import todos from './routes/todos'

dotenv.config()
const app = express()
const db = mongoose.connection
const uri = `mongodb://root:${process.env.DB_KEY}@todo-shard-00-00-vioh2.mongodb.net:27017,todo-shard-00-01-vioh2.mongodb.net:27017,todo-shard-00-02-vioh2.mongodb.net:27017/test?ssl=true&replicaSet=Todo-shard-0&authSource=admin`
const port = process.env.PORT || 3000

mongoose.connect(uri, {useMongoClient: true})
mongoose.Promise = global.Promise

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/todo/users', users)
app.use('/todo/todos', todos)

db.on('error', () => console.log('Error connecting to database'))
db.once('open', () => console.log('Connected to database'))
app.listen(port , () => console.log(`Express listening on port ${port}`))