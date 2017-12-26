const {createUser, updateUser, removeUser} = require('./user')
const {createTodo, updateTodo, removeTodo} = require('./todo')

module.exports = {
  createUser, updateUser, removeUser,
  createTodo, updateTodo, removeTodo
}