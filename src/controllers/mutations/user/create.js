const bcrypt = require('bcryptjs')
const {
  GraphQLNonNull,
  GraphQLString
} = require('graphql')
const {User} = require('../../../models')
const {UserType} = require('../../types')

module.exports = {
  type: new GraphQLNonNull(UserType),
  args: {
    name: {type: new GraphQLNonNull(GraphQLString)},
    email: {type: new GraphQLNonNull(GraphQLString)},
    password: {type: new GraphQLNonNull(GraphQLString)}
  },
  resolve: async (root, args) => {
    args.password = await bcrypt.hash(args.password, 8)
    return User.create(args)
  }
}