const mongoose = require('mongoose')
const Schema = require('../Schema')

const Comment = mongoose.model('Comment', Schema.CommentSchema)

module.exports = Comment 