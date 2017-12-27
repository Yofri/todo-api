const {
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLString
} = require('graphql')
const {Todo, User} = require('../../../models')
const {TodoType} = require('../../types')

module.exports = {
  type: new GraphQLNonNull(TodoType),
  args: {
    uid: {type: new GraphQLNonNull(GraphQLID)},
    title: {type: new GraphQLNonNull(GraphQLString)},
    task: {type: new GraphQLNonNull(GraphQLList(GraphQLString))}
  },
  resolve: async (root, args) => {
    const user = await User.find({_id: args.uid})
    if (!user.length) throw new Error('User not found')
    return await Todo.create(args)
  }
}