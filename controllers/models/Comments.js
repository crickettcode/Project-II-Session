const mongoose = require('mongoose')
const Schema = require('../db/schema')

const Comments = mongoose.model('Comments', Schema.CommentsSchema)

module.exports = Comments 