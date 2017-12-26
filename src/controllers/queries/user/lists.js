const {GraphQLList} = require('graphql')
const {User} = require('../../../models')
const {Todo} = require('../../../models')
const {UserType} = require('../../types')

module.exports = {
  type: new GraphQLList(UserType),
  resolve: async () => {
    return await User.find()
  }
}