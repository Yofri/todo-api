const {
  GraphQLNonNull,
  GraphQLList,
  GraphQLString
} = require('graphql')
const {Todo} = require('../../../models')
const {TodoType, TodoInputType} = require('../../types')

module.exports = {
  type: TodoType,
  args: {
    body: {type: new GraphQLNonNull(TodoInputType)}
  },
  resolve: async (root, {body}) => {
    return await Todo.create(body)
  }
}