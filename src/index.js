const express = require('express')
const mongoose = require('mongoose')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')
const dotenv = require('dotenv')
const morgan = require('morgan')
const schema = require('./controllers')

dotenv.config()
const app = express()
const db = mongoose.connection
const port = process.env.PORT || 3000
const uri = `mongodb://root:${process.env.DB_KEY}@todo-shard-00-00-vioh2.mongodb.net:27017,todo-shard-00-01-vioh2.mongodb.net:27017,todo-shard-00-02-vioh2.mongodb.net:27017/test?ssl=true&replicaSet=Todo-shard-0&authSource=admin`

mongoose.connect(uri, {useMongoClient: true})
mongoose.Promise = global.Promise

app.use('/todo', cors(), morgan('dev'), graphqlHTTP({
  schema,
  pretty: true,
  graphiql: true
}))

db.on('error', () => console.log('Failed to connect to database'))
db.once('open', () => console.log('Connected to database'))
app.listen(port, () => console.log(`Express listening on port ${port}`))