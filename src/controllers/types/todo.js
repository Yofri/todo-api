const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean
} = require('graphql')

const TodoType = new GraphQLObjectType({
  name: 'Todo',
  fields: {
    _id: {type: new GraphQLNonNull(GraphQLID)},
    uid: {type: new GraphQLNonNull(GraphQLID)},
    title: {type: new GraphQLNonNull(GraphQLString)},
    task: {type: new GraphQLNonNull(GraphQLList(GraphQLString))},
    completed: {type: new GraphQLNonNull(GraphQLBoolean)}
  }
})

const TodoInputType = new GraphQLInputObjectType({
  name: 'TodoInput',
  fields: {
    uid: {type: GraphQLID},
    title: {type: GraphQLString},
    task: {type: GraphQLList(GraphQLString)},
    completed: {type: GraphQLBoolean}
  }
})

module.exports = {
  TodoType,
  TodoInputType
}