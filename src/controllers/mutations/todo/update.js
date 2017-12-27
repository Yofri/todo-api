const {
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean
} = require('graphql')
const {Todo} = require('../../../models')
const {TodoType} = require('../../types')

module.exports = {
  type: new GraphQLNonNull(TodoType),
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    title: {type: GraphQLString},
    task: {type: GraphQLList(GraphQLString)},
    completed: {type: GraphQLBoolean}
  },
  resolve: async (root, args) => {
    return await Todo.findByIdAndUpdate(args.id, args)
  }
}