const {
  GraphQLNonNull,
  GraphQLID,
  GraphQLString
} = require('graphql')
const {User} = require('../../../models')
const {UserType, UserInputType} = require('../../types')

module.exports = {
  type: new GraphQLNonNull(UserType),
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    password: {type: GraphQLString}
  },
  resolve(root, args) {
    return User.findByIdAndUpdate(args.id, args)
      .then(res => res)
      .catch(err => err)
  }
}