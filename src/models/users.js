const mongoose = require('mongoose')
const {isEmail} = require('validator')

module.exports = mongoose.model('users', {
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
    validate: [isEmail, 'Invalid email address']
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Min 8 Chars.']
  }
})