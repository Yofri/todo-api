const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} = require('graphql')
const TodoType = require('./todo')
const {Todo} = require('../../models')

module.exports = new GraphQLObjectType({
  name: 'User',
  fields: {
    _id: {type: GraphQLID},
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    password: {type: GraphQLString},
    todos: {
      type: GraphQLList(TodoType),
      resolve: async ({_id}) => {
        return Todo.find({uid: _id})
      }
    }
  }
})