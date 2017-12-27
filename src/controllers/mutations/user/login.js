const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {GraphQLNonNull, GraphQLString} = require('graphql')
const {User} = require('../../../models')
const UserType = require('../../types')

module.exports = {
  type: new GraphQLNonNull(GraphQLString),
  args: {
    email: {type: new GraphQLNonNull(GraphQLString)},
    password: {type: new GraphQLNonNull(GraphQLString)}
  },
  resolve: async (root, args) => {
    const user = await User.find({email: args.email})
    if (!user.length) throw new Error('Email not found')

    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) throw new Error('Incorrect password')
    const token = jwt.sign({email: args.email}, process.env.JWT_SECRET)
    console.log(token)
    return token
  }
}