const mongoose = require('mongoose')
const connection = mongoose.connection
require('dotenv').config()

mongoose.connect(process.env.DB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

module.exports = {mongoose, connection}