const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList
} = require('graphql')
const UserType = require('./user')
const {User} = require('../../models')

module.exports = new GraphQLObjectType({
  name: 'Todo',
  fields: {
    _id: {type: GraphQLID},
    uid: {type: GraphQLID},
    title: {type: GraphQLString},
    task: {type: GraphQLList(GraphQLString)},
    completed: {type: GraphQLBoolean}/* ,
    owner: {
      type: new GraphQLNonNull(UserType),
      resolve: async ({uid}) => {
        return await User.find({_id: uid})
      }
    } */
  }
})