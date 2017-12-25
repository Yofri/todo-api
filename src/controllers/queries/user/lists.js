const {GraphQLList} = require('graphql')
const {User} = require('../../../models')
const {UserType} = require('../../types')

module.exports = {
  type: new GraphQLList(UserType),
  resolve() {
    return User.find()
      .then(res => res)
      .catch(err => err)
  }
}