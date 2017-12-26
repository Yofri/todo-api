const {
  GraphQLNonNull,
  GraphQLID
} = require('graphql')
const {Todo} = require('../../../models')
const {TodoType, TodoInputType} = require('../../types')

module.exports = {
  type: TodoType,
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    body: {type: TodoInputType}
  },
  resolve: async (root, {id, body}) => {
    return await Todo.findByIdAndUpdate(id, body)
  }
}