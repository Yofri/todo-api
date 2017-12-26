const mongoose = require('mongoose')

module.exports = mongoose.model('Todo', {
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  task: [{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }],
  completed: {
    type: Boolean,
    default: false
  }
})