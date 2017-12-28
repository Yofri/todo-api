import mongoose from 'mongoose'

export default mongoose.model('Todo', {
  uid: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
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
    trim: true
  }],
  completed: {
    type: Boolean,
    default: false
  }
})