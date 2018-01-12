const mongoose = require('mongoose')

module.exports = mongoose.model('todos', {
  uid: {
    type: mongoose.Schema.ObjectId,
    ref: 'users',
    required: true
  },
  title: {
    type: String,
    required: true,
    minlength: [1, 'Too short'],
    trim: true
  },
  task: [{
    type: String,
    required: true,
    minlength: [1, 'Too short'],
  }]
})