const {GraphQLList} = require('graphql')
const {Todo} = require('../../../models')
const {TodoType} = require('../../types')

module.exports = {
  type: new GraphQLList(TodoType),
  resolve: async () => {
    return await Todo.find()
  }
}