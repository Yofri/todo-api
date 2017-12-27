const {
  GraphQLNonNull,
  GraphQLID
} = require('graphql')
const {Todo} = require('../../../models')
const {TodoType} = require('../../types')

module.exports = {
  type: new GraphQLNonNull(TodoType),
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)}
  },
  resolve: async (root, {id}) => {
    return await Todo.findByIdAndRemove(id)
  }
}