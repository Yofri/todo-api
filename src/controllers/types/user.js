const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList
} = require('graphql')
const {TodoType} = require('./todo')
const {Todo} = require('../../models')

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    _id: {type: new GraphQLNonNull(GraphQLID)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    email: {type: new GraphQLNonNull(GraphQLString)},
    password: {type: new GraphQLNonNull(GraphQLString)},
    todos: {
      type: GraphQLList(TodoType),
      resolve: async ({_id}) => {
        return Todo.find({uid: _id})
      }
    }
  }
})

const UserInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    password: {type: GraphQLString}
  }
})

module.exports = {
  UserType,
  UserInputType
}