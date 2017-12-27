const {
  GraphQLNonNull,
  GraphQLID
} = require('graphql')
const {User} = require('../../../models')
const {UserType} = require('../../types')

module.exports = {
  type: UserType,
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)}
  },
  resolve: async (root, {id}) => {
    return await User.findById(id)
  }
}