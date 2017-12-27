const {createUser, updateUser, removeUser, login} = require('./user')
const {createTodo, updateTodo, removeTodo} = require('./todo')

module.exports = {
  createUser, updateUser, removeUser, login,
  createTodo, updateTodo, removeTodo
}