const app = require('express')()
const cors = require('cors')
const {mongoose, connection} = require('./configs')
const {user, todo} = require('./routes')
const port = process.env.PORT

app.use(cors())
app.use('/user', user)
app.use('/todo', todo)

connection.on('error', () => console.log('Error connecting to database'))
connection.once('open', () => console.log('Connected to database'))
app.listen(port , () => console.log(`Express listening on port ${port}`))