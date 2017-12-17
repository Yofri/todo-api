import mongoose from 'mongoose'
module.exports = mongoose.model('Todo', {
  creator: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true,
    minlength: [1, 'Too short'],
    trim: true
  },
  task: {
    type: String,
    required: true,
    minlength: [1, 'Too short'],
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
})