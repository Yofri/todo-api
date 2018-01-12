const {createUser, login, allUsers, updateUser, removeUser} = require('./users')
const {createTodo, allTodos, updateTodo, removeTodo} = require('./todos')

module.exports = {
  createUser, login, allUsers, updateUser, removeUser,
  createTodo, allTodos, updateTodo, removeTodo
}