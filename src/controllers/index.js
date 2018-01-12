const {createUser, login} = require('./users')
const {createTodo, allTodos, updateTodo, removeTodo} = require('./todos')

module.exports = {
  createUser, login,
  createTodo, allTodos, updateTodo, removeTodo
}